"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { ProjectInfo } from "@/components/project-info";
import { FeatureList } from "@/components/feature-list";
import { DownloadStats } from "@/components/download-stats";
import { DownloadButton } from "@/components/download-button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { MarkdownCard } from "@/components/markdown-renderer";
import { title } from "@/components/primitives";
import { useGitHubVersion } from "@/hooks/use-github-version";
import { useGitHubReadme } from "@/hooks/use-github-readme";
import { Plugin } from "@/types";
import { Book02Icon, Github01Icon } from "hugeicons-react";

interface PluginDetailProps {
  plugin: Plugin;
}

export function PluginDetail({ plugin }: PluginDetailProps) {
  // Use config version if available, otherwise fetch from GitHub
  const shouldFetchVersion = !plugin.version;
  const { version: fetchedVersion, loading: versionLoading } = useGitHubVersion(
    shouldFetchVersion ? plugin.githubRepo : ""
  );

  // Determine which version to use
  const finalVersion = plugin.version || fetchedVersion;

  // Fetch README if description is empty or not defined
  const shouldFetchReadme =
    !plugin.description || plugin.description.trim() === "";
  const { content: readmeContent, loading: readmeLoading } = useGitHubReadme(
    shouldFetchReadme ? plugin.githubRepo : ""
  );
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className={title()}>{plugin.name}</h1>
        <p className="text-lg text-default-500 mt-4 max-w-2xl mx-auto">
          {plugin.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          {shouldFetchReadme ? (
            <MarkdownCard
              content={readmeContent}
              loading={readmeLoading}
              title="Description"
              fallbackContent="No description available for this plugin."
            />
          ) : (
            <Card>
              <CardBody>
                <p className="text-default-700 leading-relaxed">
                  {plugin.description}
                </p>
              </CardBody>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Info */}
          <ProjectInfo
            repo={plugin.githubRepo}
            author={plugin.author}
            versionOverride={plugin.version}
            lastUpdatedOverride={plugin.lastUpdated}
            tags={plugin.tags}
          />

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Quick Actions</h2>
            </CardHeader>
            <CardBody className="space-y-3">
              <DownloadButton sources={plugin.downloadSources} />

              <Link href={`https://github.com/${plugin.githubRepo}`} isExternal>
                <Button
                  startContent={<Github01Icon />}
                  variant="flat"
                  className="w-full"
                >
                  View on GitHub
                </Button>
              </Link>
              {plugin.documentationUrl && (
                <Link href={plugin.documentationUrl} isExternal>
                  <Button
                    startContent={<Book02Icon />}
                    variant="flat"
                    className="w-full"
                  >
                    Documentation
                  </Button>
                </Link>
              )}
            </CardBody>
          </Card>

          {/* Download Stats */}
          <DownloadStats
            sources={plugin.downloadSources}
            showBreakdown={true}
          />
        </div>
      </div>
    </div>
  );
}
