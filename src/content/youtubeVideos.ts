export type YouTubeVideo = {
  id: string;
  title: string;
  publishedAt?: string;
  description?: string;
  tags?: string[];
};

// Add your latest videos here (YouTube video IDs).
// Example URL: https://www.youtube.com/watch?v=VIDEO_ID
export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "y5eainNzHEA",
    title:
      "DONT START 2026 WITHOUT KNOWING AI AGENT : LLMS TO AI AGENTS EXPLAINED COMPLETELY!!",
    tags: ["AI Agents", "LLMs", "System Design"],
  },
];
