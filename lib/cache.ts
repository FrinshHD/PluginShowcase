interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

class APICache {
  private cache = new Map<string, CacheEntry<any>>();

  static readonly DURATIONS = {
    DOWNLOADS: 5 * 60 * 1000,
    GITHUB_STATS: 10 * 60 * 1000,
    GITHUB_RELEASES: 15 * 60 * 1000,
    MODRINTH: 10 * 60 * 1000,
    SPIGOT: 15 * 60 * 1000,
    RATE_LIMITED: 2 * 60 * 1000,
    DEFAULT: 5 * 60 * 1000,
  } as const;

  get<T>(key: string): T | undefined {
    const entry = this.cache.get(key);
    if (!entry) {
      return undefined;
    }

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }

    return entry.data;
  }

  set<T>(
    key: string,
    data: T,
    duration: number = APICache.DURATIONS.DEFAULT
  ): void {
    const now = Date.now();
    const entry: CacheEntry<T> = {
      data,
      timestamp: now,
      expiresAt: now + duration,
    };
    this.cache.set(key, entry);
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  clearExpired(): number {
    const now = Date.now();
    let cleared = 0;

    Array.from(this.cache.entries()).forEach(([key, entry]) => {
      if (now > entry.expiresAt) {
        this.cache.delete(key);
        cleared++;
      }
    });

    return cleared;
  }

  getStats() {
    const now = Date.now();
    let expired = 0;
    let active = 0;

    Array.from(this.cache.values()).forEach((entry) => {
      if (now > entry.expiresAt) {
        expired++;
      } else {
        active++;
      }
    });

    return {
      total: this.cache.size,
      active,
      expired,
    };
  }

  async withCache<T>(
    key: string,
    fetcher: () => Promise<T>,
    duration: number = APICache.DURATIONS.DEFAULT
  ): Promise<T> {
    const cached = this.get<T>(key);
    if (cached !== undefined) {
      return cached;
    }

    const data = await fetcher();

    const cacheDuration =
      data === null ? APICache.DURATIONS.RATE_LIMITED : duration;

    this.set(key, data, cacheDuration);

    return data;
  }
}

// Export singleton instance and class
export const apiCache = new APICache();
export { APICache };

// Periodically clean up expired entries (every 10 minutes)
if (typeof global !== "undefined") {
  setInterval(
    () => {
      apiCache.clearExpired();
    },
    10 * 60 * 1000
  );
}
