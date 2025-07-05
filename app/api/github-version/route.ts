import { NextRequest, NextResponse } from "next/server";
import { apiCache, APICache } from "@/lib/cache";

interface GitHubRelease {
  tag_name: string;
  published_at: string;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const repo = searchParams.get("repo");

  if (!repo) {
    return NextResponse.json(
      { error: "Missing repo parameter" },
      { status: 400 }
    );
  }

  const cacheKey = `github:version:${repo}`;

  try {
    const result = await apiCache.withCache(
      cacheKey,
      async (): Promise<GitHubRelease | null> => {
        const headers: Record<string, string> = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "PluginShowcase/1.0",
        };

        // Add authentication if GitHub token is available
        if (process.env.GITHUB_TOKEN) {
          headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }

        const response = await fetch(
          `https://api.github.com/repos/${repo}/releases/latest`,
          { headers }
        );

        if (!response.ok) {
          if (response.status === 403) {
            return null;
          }
          if (response.status === 404) {
            return null;
          }
          // For other errors, don't cache
          return null;
        }

        const releaseData = await response.json();
        return releaseData;
      },
      APICache.DURATIONS.GITHUB_RELEASES
    );

    return NextResponse.json({ version: result });
  } catch (error) {
    // Return appropriate error response
    if (error instanceof Error) {
      if (error.message.includes("Rate limit")) {
        return NextResponse.json(
          { error: "Rate limit exceeded" },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to fetch version data" },
      { status: 500 }
    );
  }
}
