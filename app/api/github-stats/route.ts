import { NextRequest, NextResponse } from "next/server";
import { apiCache, APICache } from "@/lib/cache";

interface GitHubRepoData {
  stargazers_count: number;
  updated_at: string;
  language: string;
  open_issues_count: number;
}

interface GitHubRelease {
  tag_name: string;
  published_at: string;
}

interface GitHubStatsResponse {
  repo: GitHubRepoData;
  release?: GitHubRelease;
}

type GitHubStatsResult = GitHubStatsResponse | null;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const repo = searchParams.get("repo");

  if (!repo) {
    return NextResponse.json(
      { error: "Missing repo parameter" },
      { status: 400 }
    );
  }

  const cacheKey = `github:stats:${repo}`;

  try {
    const result = await apiCache.withCache(
      cacheKey,
      async (): Promise<GitHubStatsResult> => {
        // Prepare headers with optional authentication
        const headers: Record<string, string> = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "PluginShowcase/1.0",
        };

        // Add authentication if GitHub token is available
        if (process.env.GITHUB_TOKEN) {
          headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }

        // Fetch repository data
        const repoResponse = await fetch(
          `https://api.github.com/repos/${repo}`,
          { headers }
        );

        if (!repoResponse.ok) {
          if (repoResponse.status === 403) {
            return null;
          }
          if (repoResponse.status === 404) {
            return null;
          }
          // For other errors, don't cache
          return null;
        }

        const repoData: GitHubRepoData = await repoResponse.json();
        const resultData: GitHubStatsResponse = { repo: repoData };

        // Fetch latest release (optional)
        try {
          const releaseResponse = await fetch(
            `https://api.github.com/repos/${repo}/releases/latest`,
            { headers }
          );

          if (releaseResponse.ok) {
            const releaseData: GitHubRelease = await releaseResponse.json();
            resultData.release = releaseData;
          }
        } catch (releaseError) {
          // Latest release might not exist, that's okay
        }

        return resultData;
      },
      APICache.DURATIONS.GITHUB_STATS
    );

    // Handle null response (rate limited or error)
    if (result === null) {
      return NextResponse.json(
        { error: "GitHub data temporarily unavailable" },
        { status: 503 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    // Return appropriate error response
    if (error instanceof Error) {
      if (error.message.includes("Rate limit")) {
        return NextResponse.json(
          { error: "Rate limit exceeded" },
          { status: 429 }
        );
      }
      if (error.message.includes("not found")) {
        return NextResponse.json(
          { error: "Repository not found" },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to fetch repository data" },
      { status: 500 }
    );
  }
}
