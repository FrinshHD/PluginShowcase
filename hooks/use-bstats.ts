"use client";

import { useState, useEffect } from "react";

interface BStatsData {
  serverCount: number;
  loading: boolean;
  error: boolean;
}

export function useBStats(pluginId?: string): BStatsData {
  const [data, setData] = useState<BStatsData>({
    serverCount: 0,
    loading: false,
    error: false,
  });

  useEffect(() => {
    if (!pluginId) {
      setData({ serverCount: 0, loading: false, error: false });
      return;
    }

    setData((prev) => ({ ...prev, loading: true, error: false }));

    const fetchBStatsData = async () => {
      try {
        const response = await fetch(
          `/api/bstats?pluginId=${encodeURIComponent(pluginId)}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        setData({
          serverCount: result.serverCount || 0,
          loading: false,
          error: false,
        });
      } catch (error) {
        console.error("Error fetching bStats data:", error);
        setData({
          serverCount: 0,
          loading: false,
          error: true,
        });
      }
    };

    fetchBStatsData();
  }, [pluginId]);

  return data;
}
