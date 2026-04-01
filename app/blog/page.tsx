import Link from "next/link";
import { getArticles } from "@/lib/kuroco";
import styles from "./blog.module.css";

export const dynamic = "force-static";

export default async function BlogIndex() {
  const { list: articles, pageInfo } = await getArticles();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お知らせ</h1>
      <p className={styles.count}>全 {pageInfo.totalCnt} 件</p>

      {articles.length === 0 ? (
        <p className={styles.empty}>お知らせはありません。</p>
      ) : (
        <ul className={styles.list}>
          {articles.map((article) => (
            <li key={article.topics_id} className={styles.item}>
              <Link href={`/blog/${article.topics_id}`}>
                <span className={styles.date}>{article.ymd}</span>
                <span className={styles.subject}>{article.subject}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
