"use client";

import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Skeleton } from "@heroui/skeleton";
import { TagsIcon, Calendar03Icon } from "hugeicons-react";

interface GitHubData {
  updated_at: string;
  language: string;
}

interface GitHubRelease {
  tag_name: string;
  published_at: string;
}

interface ProjectInfoProps {
  repo: string;
  author?: string; // Optional author/developer name
  versionOverride?: string; // Optional version override
  lastUpdatedOverride?: string; // Optional last updated override (ISO date string)
  tags?: string[]; // Optional tags to display
}

export function ProjectInfo({
  repo,
  author,
  versionOverride,
  lastUpdatedOverride,
  tags,
}: ProjectInfoProps) {
  const [data, setData] = useState<GitHubData | null>(null);
  const [release, setRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Use API route which handles caching and rate limiting
        const response = await fetch(
          `/api/github-stats?repo=${encodeURIComponent(repo)}`
        );

        if (!response.ok) {
          if (response.status === 429 || response.status === 503) {
            console.warn(
              `GitHub data temporarily unavailable for repo: ${repo}`
            );
            setError("Rate limited");
            setLoading(false);
            return;
          }
          if (response.status === 404) {
            console.warn(`GitHub repository not found: ${repo}`);
            setError("Not found");
            setLoading(false);
            return;
          }
          throw new Error("Failed to fetch repository data");
        }

        const statsData = await response.json();
        setData(statsData.repo);
        if (statsData.release && !versionOverride) {
          setRelease(statsData.release);
        }
      } catch (err) {
        console.error("GitHub stats fetch error:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    // Always fetch GitHub data for stars, issues, language info
    // Overrides only affect version and lastUpdated display
    fetchGitHubData();
  }, [repo, versionOverride]);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Project Info</h2>
        </CardHeader>
        <CardBody className="space-y-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-2/3" />
        </CardBody>
      </Card>
    );
  }

  if (
    error &&
    !versionOverride &&
    !lastUpdatedOverride &&
    !author &&
    (!tags || tags.length === 0)
  ) {
    return null; // Don't show anything if there's an error and no project info to display
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Project Info</h2>
      </CardHeader>
      <CardBody className="space-y-4">
        {/* Author/Developer */}
        {author && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-default-500">Developer</span>
            <span className="text-sm font-semibold">{author}</span>
          </div>
        )}

        {/* Latest Version */}
        {(versionOverride || release) && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-default-500">Latest Version</span>
            <Chip color="success" variant="flat" size="sm">
              <div className="flex items-center gap-1">
                <TagsIcon size={14} />
                {versionOverride || release?.tag_name}
              </div>
            </Chip>
          </div>
        )}

        {/* Last Updated */}
        {(lastUpdatedOverride || data?.updated_at) && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-default-500">Last Updated</span>
            <span className="text-sm">
              <Chip variant="flat" size="sm">
                <div className="flex items-center gap-1">
                  <Calendar03Icon size={14} />
                  {formatDate(lastUpdatedOverride || data?.updated_at || "")}
                </div>
              </Chip>
            </span>
          </div>
        )}

        {/* Programming Language (only show if we have API data) */}
        {data && data.language && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-default-500">Language</span>
            <Chip color="primary" variant="flat" size="sm">
              {data.language}
            </Chip>
          </div>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-default-500">Tags</span>
            <div className="flex gap-1 flex-wrap">
              {tags.map((tag) => (
                <Chip key={tag} color="primary" variant="bordered" size="sm">
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
