"use client";

import { useEffect, useState } from "react";
import { DownloadSource } from "@/types";

interface DownloadData {
  source: string;
  count: number;
  error?: string;
}

interface DownloadCounts {
  total: number;
  sources: DownloadData[];
  loading: boolean;
  error?: string;
}

// Fetch downloads using our API route to avoid CORS issues
async function fetchDownloadsFromAPI(
  source: string,
  id: string
): Promise<number> {
  try {
    const response = await fetch(
      `/api/downloads?source=${source}&id=${encodeURIComponent(id)}`
    );

    if (!response.ok) {
      console.warn(
        `API download fetch failed for ${source}:${id} - ${response.status}`
      );
      return 0;
    }

    const data = await response.json();
    return data.count || 0;
  } catch (error) {
    console.error(`Failed to fetch downloads for ${source}:${id}`, error);
    return 0;
  }
}

// GitHub API - get download count from releases (via API route)
async function fetchGitHubDownloads(repoName: string): Promise<number> {
  // Use API route which handles caching and rate limiting
  return await fetchDownloadsFromAPI("github", repoName);
}

// Modrinth API - get download count (via API route)
async function fetchModrinthDownloads(projectId: string): Promise<number> {
  // Use API route which handles caching and rate limiting
  return await fetchDownloadsFromAPI("modrinth", projectId);
}

// CurseForge API - get download count (via API route)
async function fetchCurseForgeDownloads(projectId: string): Promise<number> {
  // Use API route which handles caching and rate limiting
  return await fetchDownloadsFromAPI("curseforge", projectId);
}

// SpigotMC downloads using Spiget API (https://spiget.org/)
async function fetchSpigotDownloads(resourceId: string): Promise<number> {
  // Use Spiget API to get SpigotMC resource download count
  return await fetchDownloadsFromAPI("spigot", resourceId);
}

// Bukkit downloads (similar to Spigot - could use similar API if available)
async function fetchBukkitDownloads(projectId: string): Promise<number> {
  // Bukkit doesn't have a public API like Spiget
  // Would require web scraping or alternative approach
  return 0;
}

export function useDownloadCounts(sources: DownloadSource[]): DownloadCounts {
  const [downloadData, setDownloadData] = useState<DownloadCounts>({
    total: 0,
    sources: [],
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    if (!sources || sources.length === 0) {
      setDownloadData({
        total: 0,
        sources: [],
        loading: false,
        error: "No download sources configured",
      });
      return;
    }

    const fetchAllDownloads = async () => {
      setDownloadData((prev) => ({ ...prev, loading: true, error: undefined }));

      // Add a small delay to prevent rapid API calls
      await new Promise((resolve) => setTimeout(resolve, 100));

      const sourcePromises = sources.map(
        async (source): Promise<DownloadData> => {
          try {
            let count = 0;

            switch (source.type) {
              case "github":
                count = await fetchGitHubDownloads(source.id);
                break;
              case "modrinth":
                count = await fetchModrinthDownloads(source.id);
                break;
              case "curseforge":
                count = await fetchCurseForgeDownloads(source.id);
                break;
              case "spigot":
                count = await fetchSpigotDownloads(source.id);
                break;
              case "bukkit":
                count = await fetchBukkitDownloads(source.id);
                break;
              default:
                throw new Error(`Unsupported source type: ${source.type}`);
            }

            return {
              source: source.type,
              count,
            };
          } catch (error) {
            return {
              source: source.type,
              count: 0,
              error: error instanceof Error ? error.message : "Unknown error",
            };
          }
        }
      );

      try {
        const results = await Promise.all(sourcePromises);
        const total = results.reduce((sum, result) => sum + result.count, 0);

        setDownloadData({
          total,
          sources: results,
          loading: false,
          error: undefined,
        });
      } catch (error) {
        setDownloadData({
          total: 0,
          sources: [],
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "Failed to fetch download counts",
        });
      }
    };

    fetchAllDownloads();
  }, [sources]);

  return downloadData;
}
