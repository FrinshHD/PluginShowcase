import { NextResponse } from "next/server";
import {
  checkGitHubRateLimit,
  getTimeUntilReset,
  isApproachingRateLimit,
} from "@/lib/github-rate-limit";

export async function GET() {
  try {
    const rateLimit = await checkGitHubRateLimit();

    if (!rateLimit) {
      return NextResponse.json(
        { error: "Unable to check rate limit" },
        { status: 503 }
      );
    }

    const timeUntilReset = getTimeUntilReset(rateLimit.reset);
    const approaching = isApproachingRateLimit(rateLimit);

    return NextResponse.json({
      rateLimit: {
        limit: rateLimit.limit,
        remaining: rateLimit.remaining,
        used: rateLimit.used,
        reset: rateLimit.reset,
        resetTime: new Date(rateLimit.reset * 1000).toISOString(),
        timeUntilReset,
        usagePercentage: Math.round((rateLimit.used / rateLimit.limit) * 100),
        approaching,
        status:
          rateLimit.remaining === 0
            ? "exhausted"
            : approaching
              ? "warning"
              : "ok",
      },
      hasToken: !!process.env.GITHUB_TOKEN,
      authenticated: !!process.env.GITHUB_TOKEN,
    });
  } catch (error) {
    console.error("Rate limit check error:", error);
    return NextResponse.json(
      { error: "Failed to check rate limit" },
      { status: 500 }
    );
  }
}
