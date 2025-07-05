"use client";

import { Chip } from "@heroui/chip";
import { useDownloadCounts } from "@/hooks/use-download-counts";
import { DownloadSource } from "@/types";

interface CompactDownloadCounterProps {
  sources: DownloadSource[];
}

export function CompactDownloadCounter({
  sources,
}: CompactDownloadCounterProps) {
  const { total, loading, error } = useDownloadCounts(sources);

  if (loading) {
    return (
      <Chip color="default" variant="flat" size="sm">
        📥 Loading...
      </Chip>
    );
  }

  if (error) {
    return null; // Don't show anything if there's an error
  }

  if (total === 0) {
    return null; // Don't show anything if there are no downloads
  }

  return (
    <Chip color="success" variant="flat" size="sm">
      📥 {total.toLocaleString()}
    </Chip>
  );
}
