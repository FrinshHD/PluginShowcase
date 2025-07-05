// Centralized caching utility for API responses
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

class APICache {
  private cache = new Map<string, CacheEntry<any>>();

  // Default cache durations (in milliseconds)
  static readonly DURATIONS = {
    DOWNLOADS: 5 * 60 * 1000, // 5 minutes for download counts
    GITHUB_STATS: 10 * 60 * 1000, // 10 minutes for GitHub repository stats
    GITHUB_RELEASES: 15 * 60 * 1000, // 15 minutes for GitHub releases
    MODRINTH: 10 * 60 * 1000, // 10 minutes for Modrinth project data
    SPIGOT: 15 * 60 * 1000, // 15 minutes for SpigotMC data
    RATE_LIMITED: 2 * 60 * 1000, // 2 minutes for rate-limited responses
    DEFAULT: 5 * 60 * 1000, // 5 minutes default
  } as const;

  /**
   * Get cached data if it exists and hasn't expired
   * Returns undefined if no cache entry exists, or the actual cached value (including null)
   */
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

  /**
   * Set data in cache with specified duration
   */
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

  /**
   * Delete specific cache entry
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Clear expired entries
   */
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

  /**
   * Get cache statistics
   */
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

  /**
   * Helper method to wrap API calls with caching
   * Handles special case for rate-limited responses (null values cached with shorter duration)
   */
  async withCache<T>(
    key: string,
    fetcher: () => Promise<T>,
    duration: number = APICache.DURATIONS.DEFAULT
  ): Promise<T> {
    // Try to get from cache first
    const cached = this.get<T>(key);
    if (cached !== undefined) {
      return cached;
    }

    // Fetch new data
    const data = await fetcher();

    // For null responses (typically rate-limited), use shorter cache duration
    const cacheDuration =
      data === null ? APICache.DURATIONS.RATE_LIMITED : duration;

    // Cache the result
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
      const cleared = apiCache.clearExpired();
      // Cleanup expired cache entries silently
    },
    10 * 60 * 1000
  );
}
