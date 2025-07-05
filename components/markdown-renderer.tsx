"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { Card, CardBody } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import "highlight.js/styles/github-dark.css";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          // Custom components to match your design system
          h1: ({ children, ...props }) => (
            <h1
              className="text-3xl font-bold text-foreground mb-6 mt-0 border-b border-divider pb-2"
              {...props}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              className="text-2xl font-semibold text-foreground mb-4 mt-8 border-b border-divider pb-2"
              {...props}
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              className="text-xl font-semibold text-foreground mb-3 mt-6"
              {...props}
            >
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4
              className="text-lg font-semibold text-foreground mb-2 mt-4"
              {...props}
            >
              {children}
            </h4>
          ),
          p: ({ children, ...props }) => (
            <p className="text-default-700 mb-4 leading-relaxed" {...props}>
              {children}
            </p>
          ),
          code: ({ children, className, ...props }: any) => {
            // Simple and reliable detection
            const isCodeBlock = className && className.startsWith("language-");

            if (isCodeBlock) {
              // This is a code block (will be wrapped in <pre>)
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }

            // This is inline code
            return (
              <code
                className="bg-default-100 text-default-800 px-1.5 py-0.5 rounded text-sm font-mono border"
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children, ...props }) => (
            <div className="relative mb-4">
              <pre
                className="bg-default-50 text-default-900 p-4 rounded-lg overflow-x-auto border border-default-200 text-sm font-mono"
                {...props}
              >
                {children}
              </pre>
            </div>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote
              className="border-l-4 border-primary bg-default-50 pl-4 pr-4 py-2 italic text-default-600 my-4 rounded-r-lg"
              {...props}
            >
              {children}
            </blockquote>
          ),
          ul: ({ children, ...props }) => (
            <ul
              className="list-disc pl-6 mb-4 space-y-1 text-default-700"
              {...props}
            >
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol
              className="list-decimal pl-6 mb-4 space-y-1 text-default-700"
              {...props}
            >
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="text-default-700 leading-relaxed" {...props}>
              {children}
            </li>
          ),
          a: ({ children, href, ...props }) => (
            <a
              href={href}
              className="text-primary hover:text-primary-600 underline decoration-primary/30 hover:decoration-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </a>
          ),
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto mb-6 rounded-lg border border-default-200">
              <table
                className="min-w-full border-collapse bg-content1"
                {...props}
              >
                {children}
              </table>
            </div>
          ),
          thead: ({ children, ...props }) => (
            <thead className="bg-default-100" {...props}>
              {children}
            </thead>
          ),
          th: ({ children, ...props }) => (
            <th
              className="border-b border-default-200 px-4 py-3 text-left font-semibold text-default-800"
              {...props}
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td
              className="border-b border-default-200 px-4 py-3 text-default-700"
              {...props}
            >
              {children}
            </td>
          ),
          // Custom styling for images (like badges, logos)
          img: ({ src, alt, ...props }: any) => {
            // Special handling for GitHub badges
            const isGitHubBadge =
              src?.includes("img.shields.io") || src?.includes("badge");
            const hasHeight = props.height;

            return (
              <img
                src={src}
                alt={alt}
                className={`inline-block max-w-full h-auto my-1 ${
                  isGitHubBadge || hasHeight ? "mr-2 align-middle" : "my-2"
                }`}
                onError={(e) => {
                  // Hide broken images gracefully
                  e.currentTarget.style.display = "none";
                }}
                {...props}
              />
            );
          },
          // Handle line breaks properly
          br: () => <br className="my-1" />,
          // Strong/bold text
          strong: ({ children, ...props }) => (
            <strong className="font-semibold text-foreground" {...props}>
              {children}
            </strong>
          ),
          // Emphasis/italic text
          em: ({ children, ...props }) => (
            <em className="italic text-default-600" {...props}>
              {children}
            </em>
          ),
          // Horizontal rule
          hr: ({ ...props }) => (
            <hr className="my-8 border-divider" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

interface MarkdownCardProps {
  content: string | null;
  loading: boolean;
  title?: string;
  fallbackContent?: string;
}

export function MarkdownCard({
  content,
  loading,
  title = "Description",
  fallbackContent = "No description available for this plugin.",
}: MarkdownCardProps) {
  if (loading) {
    return (
      <Card>
        <CardBody className="space-y-3">
          <Skeleton className="w-3/4 h-6 rounded-lg" />
          <Skeleton className="w-full h-4 rounded-lg" />
          <Skeleton className="w-full h-4 rounded-lg" />
          <Skeleton className="w-5/6 h-4 rounded-lg" />
          <Skeleton className="w-4/5 h-4 rounded-lg" />
        </CardBody>
      </Card>
    );
  }

  return (
    <Card>
      <CardBody>
        {content ? (
          <MarkdownRenderer content={content} />
        ) : (
          <p className="text-default-500 italic">{fallbackContent}</p>
        )}
      </CardBody>
    </Card>
  );
}
