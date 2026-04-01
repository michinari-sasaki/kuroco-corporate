import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, getAllArticleIds } from "@/lib/kuroco";

export const revalidate = 60;

export async function generateStaticParams() {
  const ids = await getAllArticleIds();
  return ids.map((id) => ({ id: String(id) }));
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticle(Number(id));

  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 mb-8 inline-block">
        ← お知らせ一覧
      </Link>

      <p className="text-sm text-gray-400 mb-3">{article.ymd}</p>
      <h1 className="text-2xl font-bold text-gray-900 mb-10 leading-snug">{article.subject}</h1>

      <div
        className="prose prose-gray max-w-none text-gray-700 leading-8"
        dangerouslySetInnerHTML={{ __html: article.contents }}
      />
    </div>
  );
}
