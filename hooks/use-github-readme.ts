import { useState, useEffect } from "react";

interface UseGitHubReadmeReturn {
  content: string | null;
  loading: boolean;
  error: string | null;
}

export function useGitHubReadme(repo: string): UseGitHubReadmeReturn {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!repo) {
      setLoading(false);
      return;
    }

    async function fetchReadme() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/github-readme?repo=${encodeURIComponent(repo)}`
        );

        if (!response.ok) {
          if (response.status === 404 || response.status === 503) {
            // README not found or service unavailable (rate limited)
            setContent(null);
            setError(null);
            return;
          }
          throw new Error(`Failed to fetch README: ${response.status}`);
        }

        const data = await response.json();
        setContent(data.content);
      } catch (err) {
        console.error("Error fetching README:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
        setContent(null);
      } finally {
        setLoading(false);
      }
    }

    fetchReadme();
  }, [repo]);

  return { content, loading, error };
}
