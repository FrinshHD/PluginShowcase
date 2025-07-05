import { NextRequest, NextResponse } from "next/server";
import { apiCache, APICache } from "@/lib/cache";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const repo = searchParams.get("repo");

  if (!repo) {
    return NextResponse.json(
      { error: "Missing repo parameter" },
      { status: 400 }
    );
  }

  const cacheKey = `github:readme:${repo}`;

  try {
    const result = await apiCache.withCache(
      cacheKey,
      async (): Promise<string | null> => {
        const headers: Record<string, string> = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "PluginShowcase/1.0",
        };

        // Add authentication if GitHub token is available
        if (process.env.GITHUB_TOKEN) {
          headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }

        const response = await fetch(
          `https://api.github.com/repos/${repo}/readme`,
          { headers }
        );

        if (!response.ok) {
          if (response.status === 403) {
            console.warn(`GitHub API rate limit exceeded for repo: ${repo}`);
            return null;
          }
          if (response.status === 404) {
            console.warn(`GitHub README not found for repo: ${repo}`);
            return null;
          }
          // For other errors, don't cache
          console.warn(`GitHub API error ${response.status} for repo: ${repo}`);
          return null;
        }

        const readmeData = await response.json();
        // GitHub API returns base64 encoded content
        const content = Buffer.from(readmeData.content, "base64").toString(
          "utf-8"
        );
        return content;
      },
      APICache.DURATIONS.GITHUB_RELEASES // 15 minutes cache for README
    );

    return NextResponse.json({ content: result });
  } catch (error) {
    console.error("GitHub README fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch README data" },
      { status: 500 }
    );
  }
}
