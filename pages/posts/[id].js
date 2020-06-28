import { getPostById, getPostIds } from "../../lib/posts";
import Layout from "../../components/Layout";
import ParsedMarkdown from "../../components/ParsedMarkdown";
import styles from "../../components/Post.module.scss";

export default function Post({ frontmatter, content }) {
  return (
    <Layout title={frontmatter.title}>
      <article className={styles.article}>
        <header>
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <p className={styles.date}>{frontmatter.date}</p>
        </header>
        <div className={styles.content}>
          <ParsedMarkdown content={content} />
        </div>
      </article>

      <style jsx global>{`
        .katex > .katex-html {
          white-space: normal;
        }

        .katex .base {
          margin-top: 2px;
          margin-bottom: 2px;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const postData = getPostById(id);

  return {
    props: postData,
  };
}
