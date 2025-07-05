// Utility functions for GitHub API rate limit management

export interface GitHubRateLimit {
  limit: number;
  remaining: number;
  reset: number; // Unix timestamp
  used: number;
}

/**
 * Check GitHub API rate limit status
 */
export async function checkGitHubRateLimit(): Promise<GitHubRateLimit | null> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "PluginShowcase/1.0",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch("https://api.github.com/rate_limit", {
      headers,
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.rate || data.resources?.core;
  } catch (error) {
    console.warn("Failed to check GitHub rate limit:", error);
    return null;
  }
}

/**
 * Get human-readable time until rate limit reset
 */
export function getTimeUntilReset(resetTimestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const secondsUntilReset = resetTimestamp - now;

  if (secondsUntilReset <= 0) {
    return "Rate limit has reset";
  }

  const minutes = Math.floor(secondsUntilReset / 60);
  const seconds = secondsUntilReset % 60;

  if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  }
  return `${seconds}s`;
}

/**
 * Check if we're approaching rate limit (less than 10% remaining)
 */
export function isApproachingRateLimit(rateLimit: GitHubRateLimit): boolean {
  const usagePercentage = rateLimit.used / rateLimit.limit;
  return usagePercentage > 0.9; // More than 90% used
}
