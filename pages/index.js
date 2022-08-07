import Head from "next/head";
import styles from "../styles/css/Home.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lolinck API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/05bb22a118.js"
        crossOrigin="anonymous"
      ></Script>
      <main>
        <h1>Introduction</h1>
        <p></p>
        <h1>Getting started</h1>
        <p></p>
      </main>
    </div>
  );
}
