"use client";

import { useEffect, useState } from "react";

interface GitHubRelease {
  tag_name: string;
  published_at: string;
}

export function useGitHubVersion(repo: string) {
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchVersion = async () => {
      try {
        // Use API route which handles caching and rate limiting
        const response = await fetch(
          `/api/github-version?repo=${encodeURIComponent(repo)}`
        );

        if (response.ok) {
          const data = await response.json();
          setVersion(data.version?.tag_name || null);
        } else if (response.status === 429) {
          console.warn(`GitHub API rate limit exceeded for repo: ${repo}`);
          setVersion(null); // Don't show anything if rate limited
        } else if (response.status === 404) {
          console.warn(`GitHub repository not found: ${repo}`);
          setVersion(null); // Don't show anything if not found
        } else {
          setVersion(null); // Don't show anything for other errors
        }
      } catch (error) {
        console.error("Failed to fetch version:", error);
        setVersion(null); // Don't show anything if there's an error
      } finally {
        setLoading(false);
      }
    };

    if (repo) {
      fetchVersion();
    }
  }, [repo]);

  return { version, loading };
}
