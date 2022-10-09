import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Friendly Badge</title>
        <meta name="description" content="Generate github friendliness badge for your project to increase the number of contributors." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl my-5 font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Friendly <span className="text-purple-300">Badge</span>
        </h1>
        <div className="px-10 py-5 rounded-lg bg-gray-700 text-white">
          <div>http://localhost:3000/api/badge</div>
        </div>
      </main>
    </>
  );
};

export default Home;