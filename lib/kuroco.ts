const BASE = process.env.KUROCO_API_BASE!;
const TOKEN = process.env.KUROCO_API_TOKEN!;

const headers = { "X-RCMS-API-ACCESS-TOKEN": TOKEN };

export type Article = {
  topics_id: number;
  subject: string;
  contents: string;
  ymd: string;
  group_nm: string;
};

export type PageInfo = {
  totalCnt: number;
  perPage: number;
  totalPageCnt: number;
  pageNo: number;
};

export async function getArticles(): Promise<{ list: Article[]; pageInfo: PageInfo }> {
  const res = await fetch(`${BASE}/blog`, { headers, cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

export async function getArticle(id: number): Promise<Article | null> {
  const res = await fetch(`${BASE}/blog?topics_id=${id}`, { headers, cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch article");
  const data = await res.json();
  return data.list?.[0] ?? null;
}

export async function getAllArticleIds(): Promise<number[]> {
  const { list } = await getArticles();
  return list.map((a) => a.topics_id);
}
