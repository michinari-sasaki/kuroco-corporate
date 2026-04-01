import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, getAllArticleIds } from "@/lib/kuroco";
import styles from "./article.module.css";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const ids = await getAllArticleIds();
  return ids.map((id) => ({ id: String(id) }));
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticle(Number(id));

  if (!article) notFound();

  return (
    <div className={styles.container}>
      <Link href="/blog" className={styles.back}>← お知らせ一覧</Link>
      <p className={styles.date}>{article.ymd}</p>
      <h1 className={styles.title}>{article.subject}</h1>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: article.contents }}
      />
    </div>
  );
}
