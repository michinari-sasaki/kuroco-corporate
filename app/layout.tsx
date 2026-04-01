import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "株式会社サンプル | コーポレートサイト",
  description: "株式会社サンプルの公式コーポレートサイトです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        <header className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 hover:opacity-80">
              株式会社サンプル
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-gray-900">TOP</Link>
              <Link href="/blog" className="hover:text-gray-900">お知らせ</Link>
              <Link href="/#about" className="hover:text-gray-900">会社概要</Link>
              <Link href="/#contact" className="hover:text-gray-900">お問い合わせ</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200 mt-20">
          <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-400 text-center">
            © 2026 株式会社サンプル. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
