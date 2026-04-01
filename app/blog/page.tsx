import Link from "next/link";
import { getArticles } from "@/lib/kuroco";

export const revalidate = 60;

export default async function BlogIndex() {
  const { list: articles, pageInfo } = await getArticles();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">お知らせ</h1>
      <p className="text-sm text-gray-400 mb-10">全 {pageInfo.totalCnt} 件</p>

      {articles.length === 0 ? (
        <p className="text-gray-400">お知らせはありません。</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {articles.map((article) => (
            <li key={article.topics_id}>
              <Link
                href={`/blog/${article.topics_id}`}
                className="flex items-start gap-6 py-6 hover:opacity-70 transition"
              >
                <span className="text-sm text-gray-400 whitespace-nowrap mt-1 w-28 shrink-0">
                  {article.ymd}
                </span>
                <span className="text-gray-800 font-medium">{article.subject}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
