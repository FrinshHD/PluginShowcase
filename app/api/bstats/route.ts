import { NextRequest, NextResponse } from "next/server";
import { apiCache, APICache } from "@/lib/cache";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const pluginId = searchParams.get("pluginId");

  if (!pluginId) {
    return NextResponse.json(
      { error: "Missing pluginId parameter" },
      { status: 400 }
    );
  }

  try {
    const serverCount = await fetchBStatsServerCount(pluginId);
    return NextResponse.json({ serverCount });
  } catch (error) {
    // Return 0 instead of error to avoid breaking UI
    return NextResponse.json({ serverCount: 0 });
  }
}

async function fetchBStatsServerCount(pluginId: string): Promise<number> {
  const cacheKey = `bstats:servers:${pluginId}`;

  return await apiCache.withCache(
    cacheKey,
    async (): Promise<number> => {
      try {
        const response = await fetch(
          `https://bstats.org/api/v1/plugins/${pluginId}/charts/servers/data?maxElements=1`,
          {
            headers: {
              "User-Agent": "PluginShowcase/1.0",
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          if (response.status === 404) {
            return 0;
          }
          throw new Error(`bStats API error: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const latestDataPoint = data[data.length - 1];

          if (Array.isArray(latestDataPoint) && latestDataPoint.length >= 2) {
            const serverCount = latestDataPoint[1];
            if (typeof serverCount === "number") {
              return serverCount;
            }
          }
        }

        return 0;
      } catch (error) {
        console.error(
          `Error fetching bStats data for plugin ${pluginId}:`,
          error
        );
        return 0;
      }
    },
    APICache.DURATIONS.BSTATS
  );
}
