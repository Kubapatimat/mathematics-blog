import Link from "next/link";
import SEO from "../components/SEO";
import styles from "../components/Layout.module.scss";

export default function Layout({ title, description, children }) {
  const SEOProps = { title, description };

  return (
    <div className={styles.container}>
      <SEO {...SEOProps} />
      <header className={styles.header}>
        <Link href="/">
          <a>Ciekawostki matematyczne</a>
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Jakub Halfar
      </footer>
    </div>
  );
}
