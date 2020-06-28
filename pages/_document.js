import Document, { Html, Head, Main, NextScript } from "next/document";
import { getSiteMetadata } from "../lib/helpers";

class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetadata();

    return (
      <Html lang={siteMetadata.language}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
