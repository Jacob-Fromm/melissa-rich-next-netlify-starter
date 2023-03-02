import "/styles/globals.scss";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "components/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Melissa Rich NYC</title>
        {/* <link rel="stylesheet" href="https://use.typekit.net/kpc6ezr.css" /> */}
        <script src="/path/to/resource.js" type="text/javascript" />
      </Helmet>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
