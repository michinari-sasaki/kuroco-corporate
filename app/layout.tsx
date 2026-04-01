import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "株式会社サンプル | コーポレートサイト",
  description: "株式会社サンプルの公式コーポレートサイトです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo}>株式会社サンプル</Link>
            <nav className={styles.nav}>
              <Link href="/" className={styles.navLink}>TOP</Link>
              <Link href="/blog" className={styles.navLink}>お知らせ</Link>
              <Link href="/#about" className={styles.navLink}>会社概要</Link>
              <Link href="/#contact" className={styles.navLink}>お問い合わせ</Link>
            </nav>
          </div>
        </header>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            © 2026 株式会社サンプル. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
