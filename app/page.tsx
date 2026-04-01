import Link from "next/link";
import { getArticles } from "@/lib/kuroco";
import styles from "./page.module.css";

export const dynamic = "force-static";

export default async function Home() {
  const { list: articles } = await getArticles();
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroLabel}>CORPORATE SITE</p>
          <h1 className={styles.heroTitle}>
            未来をつくる技術と、<br />誠実なものづくり。
          </h1>
          <p className={styles.heroText}>
            株式会社サンプルは、お客様の課題に向き合い、最適なソリューションを提供します。
          </p>
          <Link href="/blog" className={styles.heroBtn}>お知らせを見る</Link>
        </div>
      </section>

      {/* 会社概要 */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>会社概要</h2>
          <table className={styles.table}>
            <tbody>
              {[
                ["会社名", "株式会社サンプル"],
                ["設立", "2020年4月"],
                ["代表取締役", "山田 太郎"],
                ["所在地", "東京都荒川区荒川3丁目"],
                ["事業内容", "Webシステム開発・コンサルティング"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className={styles.tableLabel}>{label}</td>
                  <td className={styles.tableValue}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* お知らせ */}
      <section className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>お知らせ</h2>
            <Link href="/blog" className={styles.sectionMore}>一覧を見る →</Link>
          </div>
          {latestArticles.length === 0 ? (
            <p className={styles.empty}>お知らせはありません。</p>
          ) : (
            <ul className={styles.newsList}>
              {latestArticles.map((article) => (
                <li key={article.topics_id} className={styles.newsItem}>
                  <Link href={`/blog/${article.topics_id}`}>
                    <span className={styles.newsDate}>{article.ymd}</span>
                    <span className={styles.newsTitle}>{article.subject}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactInner}>
          <h2 className={styles.contactTitle}>お問い合わせ</h2>
          <p className={styles.contactText}>ご質問・ご相談はお気軽にどうぞ。</p>
          <a href="mailto:info@example.com" className={styles.contactBtn}>
            メールで問い合わせる
          </a>
        </div>
      </section>
    </>
  );
}
