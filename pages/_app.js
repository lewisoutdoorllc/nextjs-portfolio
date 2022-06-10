import { useEffect, useState } from "react";
import Layout from "../components/Layout";
// import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>Lewis Portfolio</title>
        <link rel="icon" href="/images/l-logo-4.png" />
      </Head>
      <Layout>
        {/* <Head title={`Cody Lewis | ${pageProps.title}`} /> */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
