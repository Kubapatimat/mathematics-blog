import Layout from "../components/Layout";
import PostList from "../components/PostList";
import { getSortedPosts } from "../lib/posts";
import styles from "../components/Index.module.scss";
import Link from "next/link";

export default function Index({ posts }) {
  return (
    <Layout title="Strona główna">
      <p className={styles.intro}>
        Witam na mojej stronie internetowej poświęconej ciekawostkom
        matematycznym. Znajdują się na niej artytkuły, w których przedstawiam
        interesujące twierdzenia matematyczne i fakty oraz pokazuję dowody
        znanych wzorów. Mam nadzieję, że znajdująca się tutaj treść będzie
        inspiracją do własnego poznawania matematyki.
      </p>
      <h2>
        <Link href={"/about"}>Proces powstawania strony internetowej</Link>
      </h2>
      <section>
        <h2 className={styles.postlistHeader}>Artykuły</h2>
        <PostList posts={posts} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
