import { NextRequest, NextResponse } from "next/server";
import { apiCache } from "@/lib/cache";

export async function GET(request: NextRequest) {
  try {
    const stats = apiCache.getStats();

    return NextResponse.json({
      cacheStats: stats,
      message: `Cache contains ${stats.active} active entries and ${stats.expired} expired entries`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get cache stats" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const key = searchParams.get("key");

    if (key) {
      // Delete specific cache entry
      const deleted = apiCache.delete(key);
      return NextResponse.json({
        message: deleted
          ? `Cache entry '${key}' deleted`
          : `Cache entry '${key}' not found`,
      });
    } else {
      // Clear all cache
      apiCache.clear();
      return NextResponse.json({
        message: "All cache entries cleared",
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to clear cache" },
      { status: 500 }
    );
  }
}
