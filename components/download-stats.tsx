"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Skeleton } from "@heroui/skeleton";
import { Progress } from "@heroui/progress";
import { useDownloadCounts } from "@/hooks/use-download-counts";
import { DownloadSource } from "@/types";

interface DownloadStatsProps {
  sources: DownloadSource[];
  showBreakdown?: boolean;
}

export function DownloadStats({
  sources,
  showBreakdown = false,
}: DownloadStatsProps) {
  const {
    total,
    sources: downloadSources,
    loading,
    error,
  } = useDownloadCounts(sources);

  const getSourceIcon = (sourceType: string) => {
    switch (sourceType) {
      case "github":
        return "🐙";
      case "modrinth":
        return "📦";
      case "curseforge":
        return "🔥";
      case "spigot":
        return "🟡";
      case "bukkit":
        return "🟠";
      default:
        return "📊";
    }
  };

  const getSourceColor = (sourceType: string) => {
    switch (sourceType) {
      case "github":
        return "default" as const;
      case "modrinth":
        return "success" as const;
      case "curseforge":
        return "danger" as const;
      case "spigot":
        return "warning" as const;
      case "bukkit":
        return "secondary" as const;
      default:
        return "primary" as const;
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Download Stats</h3>
        </CardHeader>
        <CardBody className="space-y-3">
          <Skeleton className="h-6 w-32" />
          {showBreakdown && (
            <>
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-28" />
            </>
          )}
        </CardBody>
      </Card>
    );
  }

  if (error) {
    return null; // Don't show anything if there's an error
  }

  if (total === 0) {
    return null; // Don't show anything if there are no downloads
  }

  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Download Stats</h3>
      </CardHeader>
      <CardBody className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-default-500">Total Downloads</span>
          <Chip color="success" variant="flat" size="lg">
            📥 {total.toLocaleString()}
          </Chip>
        </div>

        {showBreakdown && downloadSources.length > 1 && (
          <div className="space-y-3">
            <div className="text-sm text-default-500 font-medium">
              Breakdown by Source:
            </div>
            {downloadSources.map((source, index) =>
              source.count === 0 ? null : (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span>{getSourceIcon(source.source)}</span>
                      <span className="text-sm capitalize">
                        {source.source}
                      </span>
                      {source.error && (
                        <Chip color="danger" variant="flat" size="sm">
                          Error
                        </Chip>
                      )}
                    </div>
                    <Chip
                      color={getSourceColor(source.source)}
                      variant="flat"
                      size="sm"
                    >
                      {source.count.toLocaleString()}
                    </Chip>
                  </div>
                  {total > 0 && (
                    <Progress
                      size="sm"
                      value={(source.count / total) * 100}
                      color={getSourceColor(source.source)}
                      className="max-w-full"
                    />
                  )}
                </div>
              )
            )}
          </div>
        )}
      </CardBody>
    </Card>
  );
}
