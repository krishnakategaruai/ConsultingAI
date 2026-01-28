import { XMLParser } from "fast-xml-parser";

export type YouTubeRssVideo = {
  id: string;
  title: string;
  url: string;
  publishedAt?: string;
  thumbnailUrl?: string;
};

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
});

function asArray<T>(value: T | T[] | undefined | null): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function pickText(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "#text" in (value as any)) {
    const t = (value as any)["#text"];
    return typeof t === "string" ? t : undefined;
  }
  return undefined;
}

export function getYouTubeRssUrl(): string | undefined {
  const explicit = process.env.YOUTUBE_RSS_URL?.trim();
  if (explicit) return explicit;

  const channelId = process.env.YOUTUBE_CHANNEL_ID?.trim();
  if (channelId) {
    return `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  }

  return undefined;
}

export async function fetchRecentYouTubeVideos(
  maxItems = 12
): Promise<YouTubeRssVideo[]> {
  const rssUrl = getYouTubeRssUrl();
  if (!rssUrl) return [];

  const res = await fetch(rssUrl, {
    // Cache-ish behavior: refresh hourly
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];

  const xml = await res.text();
  const data = parser.parse(xml);

  const feed = data?.feed;
  const entries = asArray<any>(feed?.entry);

  return entries.slice(0, Math.max(0, maxItems)).map((e) => {
    const id = pickText(e?.["yt:videoId"]) || pickText(e?.["id"]) || "";
    const title = pickText(e?.title) || "Untitled";
    const url =
      pickText(e?.link?.["@_href"]) ||
      pickText(asArray<any>(e?.link)[0]?.["@_href"]) ||
      (id ? `https://www.youtube.com/watch?v=${id}` : "https://www.youtube.com");

    const publishedAt = pickText(e?.published);

    const mediaGroup = e?.["media:group"];
    const thumbs = asArray<any>(mediaGroup?.["media:thumbnail"]);
    const thumbnailUrl = thumbs[0]?.["@_url"];

    return {
      id,
      title,
      url,
      publishedAt,
      thumbnailUrl,
    } satisfies YouTubeRssVideo;
  });
}
