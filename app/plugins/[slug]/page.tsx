import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PluginDetail } from "@/components/plugin-detail";
import pluginsData from "@/data/plugins.json";
import { Plugin } from "@/types";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const plugin = (pluginsData as Plugin[]).find((p) => p.slug === slug);

  if (!plugin) {
    return {
      title: "Plugin Not Found",
      description: "The requested plugin could not be found.",
    };
  }

  return {
    title: `${plugin.name} - Plugin Showcase`,
    description: plugin.shortDescription,
    keywords: plugin.tags.join(", "),
    openGraph: {
      title: plugin.name,
      description: plugin.shortDescription,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return (pluginsData as Plugin[]).map((plugin) => ({
    slug: plugin.slug,
  }));
}

export default async function PluginDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const plugin = (pluginsData as Plugin[]).find((p) => p.slug === slug);

  if (!plugin) {
    notFound();
  }

  return <PluginDetail plugin={plugin} />;
}
