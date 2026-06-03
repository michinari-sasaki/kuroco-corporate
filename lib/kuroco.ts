import type { BlogListResponse, Article, PageInfo } from "./kuroco-types";

const BASE = process.env.KUROCO_API_BASE!;
const TOKEN = process.env.KUROCO_API_TOKEN!;

const headers = { "X-RCMS-API-ACCESS-TOKEN": TOKEN };

export type { Article, PageInfo };

export async function getArticles(): Promise<BlogListResponse> {
  const res = await fetch(`${BASE}/blog`, { headers });
  if (!res.ok) throw new Error(`Failed to fetch articles: ${res.status}`);
  return res.json() as Promise<BlogListResponse>;
}

export async function getArticle(id: number): Promise<Article | null> {
  const res = await fetch(`${BASE}/blog?topics_id=${id}`, { headers });
  if (!res.ok) throw new Error(`Failed to fetch article: ${res.status}`);
  const data = await res.json() as BlogListResponse;
  return data.list[0] ?? null;
}

export async function getAllArticleIds(): Promise<number[]> {
  const { list } = await getArticles();
  return list.map((a) => a.topics_id);
}
