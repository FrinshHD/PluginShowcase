import { NextRequest, NextResponse } from "next/server";
import { apiCache, APICache } from "@/lib/cache";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const source = searchParams.get("source");
  const id = searchParams.get("id");

  if (!source || !id) {
    return NextResponse.json(
      { error: "Missing source or id parameter" },
      { status: 400 }
    );
  }

  try {
    let count = 0;

    switch (source) {
      case "github":
        count = await fetchGitHubDownloads(id);
        break;
      case "modrinth":
        count = await fetchModrinthDownloads(id);
        break;
      case "curseforge":
        count = await fetchCurseForgeDownloads(id);
        break;
      case "spigot":
        count = await fetchSpigotDownloads(id);
        break;
      default:
        return NextResponse.json(
          { error: "Unsupported source type" },
          { status: 400 }
        );
    }

    return NextResponse.json({ count });
  } catch (error) {
    // Return 0 instead of error to avoid breaking UI
    return NextResponse.json({ count: 0 });
  }
}

async function fetchGitHubDownloads(repoName: string): Promise<number> {
  const cacheKey = `github:downloads:${repoName}`;

  return await apiCache.withCache(
    cacheKey,
    async (): Promise<number> => {
      try {
        const headers: Record<string, string> = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "PluginShowcase/1.0",
        };

        // Add authentication if GitHub token is available
        if (process.env.GITHUB_TOKEN) {
          headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
        }

        const response = await fetch(
          `https://api.github.com/repos/${repoName}/releases`,
          { headers }
        );

        if (!response.ok) {
          // Handle rate limiting (403) and not found (404) gracefully
          if (response.status === 403) {
            return 0;
          }
          if (response.status === 404) {
            return 0;
          }
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const releases = await response.json();
        if (!Array.isArray(releases)) {
          return 0;
        }

        let totalDownloads = 0;

        releases.forEach((release: any) => {
          if (release.assets && Array.isArray(release.assets)) {
            release.assets.forEach((asset: any) => {
              totalDownloads += asset.download_count || 0;
            });
          }
        });

        return totalDownloads;
      } catch (error) {
        // Return 0 instead of throwing to prevent API route from failing
        return 0;
      }
    },
    APICache.DURATIONS.DOWNLOADS
  );
}

async function fetchModrinthDownloads(projectId: string): Promise<number> {
  const cacheKey = `modrinth:downloads:${projectId}`;

  return await apiCache.withCache(
    cacheKey,
    async (): Promise<number> => {
      try {
        const response = await fetch(
          `https://api.modrinth.com/v2/project/${projectId}`,
          {
            headers: {
              "User-Agent": "PluginShowcase/1.0",
            },
          }
        );

        if (!response.ok) {
          if (response.status === 404) {
            return 0;
          }
          throw new Error(`Modrinth API error: ${response.status}`);
        }

        const project = await response.json();
        return project.downloads || 0;
      } catch (error) {
        return 0;
      }
    },
    APICache.DURATIONS.MODRINTH
  );
}

async function fetchCurseForgeDownloads(projectId: string): Promise<number> {
  // CurseForge API requires API key and has different structure
  // For demo purposes, returning 0
  return 0;
}

async function fetchSpigotDownloads(resourceId: string): Promise<number> {
  const cacheKey = `spigot:downloads:${resourceId}`;

  return await apiCache.withCache(
    cacheKey,
    async (): Promise<number> => {
      try {
        // Use Spiget API to get SpigotMC resource download count
        // API Documentation: https://spiget.org/documentation
        const response = await fetch(
          `https://api.spiget.org/v2/resources/${resourceId}`,
          {
            headers: {
              "User-Agent": "PluginShowcase/1.0",
            },
          }
        );

        if (!response.ok) {
          if (response.status === 404) {
            return 0;
          }
          throw new Error(`Spiget API error: ${response.status}`);
        }

        const resource = await response.json();
        return resource.downloads || 0;
      } catch (error) {
        return 0;
      }
    },
    APICache.DURATIONS.SPIGOT
  );
}
