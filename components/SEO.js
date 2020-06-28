import { getSiteMetadata } from "../lib/helpers";
import Head from "next/head";

export default function SEO({ title = "", description = "" }) {
  return (
    <Head>
      <title>{title || getSiteMetadata().title}</title>
      <meta
        name="description"
        content={description || getSiteMetadata().description}
      />
    </Head>
  );
}
