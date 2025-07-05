"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import pluginsData from "@/data/plugins.json";
import { Plugin } from "@/types";
import { CompactDownloadCounter } from "@/components/compact-download-counter";

export function FeaturedPlugins() {
  const featuredPlugins = (pluginsData as Plugin[]).filter(
    (plugin) => plugin.featured
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredPlugins.map((plugin) => (
        <Card key={plugin.slug} className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-semibold">{plugin.name}</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-small text-default-600">
              {plugin.shortDescription}
            </p>
            <div className="flex gap-2 mt-4">
              {plugin.tags.slice(0, 3).map((tag) => (
                <Chip key={tag} color="primary" variant="flat" size="sm">
                  {tag}
                </Chip>
              ))}
            </div>
            <div className="mt-3">
              <CompactDownloadCounter sources={plugin.downloadSources} />
            </div>
          </CardBody>
          <CardFooter>
            <Link href={`/plugins/${plugin.slug}`} className="w-full">
              <Button color="primary" variant="flat" className="w-full">
                Learn More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
