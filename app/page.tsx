import Link from "next/link";
import { getArticles } from "@/lib/kuroco";

export const revalidate = 60;

export default async function Home() {
  const { list: articles } = await getArticles();
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium tracking-widest text-gray-400 mb-4">CORPORATE SITE</p>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            未来をつくる技術と、<br />誠実なものづくり。
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-10">
            株式会社サンプルは、お客様の課題に向き合い、最適なソリューションを提供します。
          </p>
          <Link
            href="/blog"
            className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            お知らせを見る
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">会社概要</h2>
          <table className="w-full text-sm border-collapse">
            <tbody>
              {[
                ["会社名", "株式会社サンプル"],
                ["設立", "2020年4月"],
                ["代表取締役", "山田 太郎"],
                ["所在地", "東京都荒川区荒川3丁目"],
                ["事業内容", "Webシステム開発・コンサルティング"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-gray-100">
                  <td className="py-4 pr-8 font-medium text-gray-500 w-36">{label}</td>
                  <td className="py-4 text-gray-800">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">お知らせ</h2>
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900">
              一覧を見る →
            </Link>
          </div>
          {latestArticles.length === 0 ? (
            <p className="text-gray-400 text-sm">お知らせはありません。</p>
          ) : (
            <ul className="divide-y divide-gray-200 bg-white rounded-lg overflow-hidden shadow-sm">
              {latestArticles.map((article) => (
                <li key={article.topics_id}>
                  <Link
                    href={`/blog/${article.topics_id}`}
                    className="flex items-start gap-4 px-6 py-5 hover:bg-gray-50 transition"
                  >
                    <span className="text-sm text-gray-400 whitespace-nowrap mt-0.5">{article.ymd}</span>
                    <span className="text-gray-800 font-medium">{article.subject}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">お問い合わせ</h2>
          <p className="text-gray-500 mb-8">ご質問・ご相談はお気軽にどうぞ。</p>
          <a
            href="mailto:info@example.com"
            className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded hover:bg-gray-700 transition"
          >
            メールで問い合わせる
          </a>
        </div>
      </section>
    </>
  );
}
