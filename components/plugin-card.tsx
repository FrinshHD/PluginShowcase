import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Plugin } from "@/types";
import { CompactDownloadCounter } from "@/components/compact-download-counter";
import { siteConfig } from "@/config/site";

interface PluginCardProps {
  plugin: Plugin;
  showFeaturedBadge?: boolean;
  buttonText?: string;
}

export function PluginCard({
  plugin,
  showFeaturedBadge = false,
  buttonText = "View Details",
}: PluginCardProps) {
  return (
    <Card key={plugin.slug} className="max-w-[400px] h-full">
      <CardHeader className="flex gap-3">
        {siteConfig.homepage.pluginDisplay.showIcons && plugin.icon && (
          <Image
            alt={`${plugin.name} icon`}
            height={60}
            radius="sm"
            src={plugin.icon}
            width={60}
            className="flex-shrink-0"
          />
        )}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start">
            <p className="text-md font-semibold">{plugin.name}</p>
            {showFeaturedBadge && plugin.featured && (
              <Chip color="warning" variant="flat" size="sm">
                Featured
              </Chip>
            )}
          </div>
          <div className="flex justify-between items-center mt-1">
            <CompactDownloadCounter sources={plugin.downloadSources} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="flex-grow">
        <p className="text-small text-default-600 mb-4">
          {plugin.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          {plugin.tags.slice(0, 4).map((tag) => (
            <Chip key={tag} color="primary" variant="flat" size="sm">
              {tag}
            </Chip>
          ))}
          {plugin.tags.length > 4 && (
            <Chip color="default" variant="flat" size="sm">
              +{plugin.tags.length - 4}
            </Chip>
          )}
        </div>
      </CardBody>
      <CardFooter>
        <Link href={`/plugins/${plugin.slug}`} className="w-full">
          <Button color="primary" variant="flat" className="w-full">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
