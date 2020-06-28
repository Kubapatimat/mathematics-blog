import Link from "next/link";
import styles from "../components/PostList.module.scss";
import ParsedMarkdown from "../components/ParsedMarkdown";

export default function PostList({ posts }) {
  return (
    <div className={styles.postContainer}>
      {posts.map(({ id, frontmatter }) => (
        <Link href={"/posts/[id]"} as={`/posts/${id}`} key={id}>
          <article className={styles.article}>
            <header>
              <div className={styles.thumbnail}>
                <ParsedMarkdown content={frontmatter.thumbnail} />
              </div>
              <h3 className={styles.postTitle}>{frontmatter.title}</h3>
              <span className={styles.date}>{frontmatter.date}</span>
            </header>
          </article>
        </Link>
      ))}
    </div>
  );
}
