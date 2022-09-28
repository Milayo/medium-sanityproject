import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <div>
          <h1>Medium is a place to write, read and connect</h1>
          <h2>
            It is easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
