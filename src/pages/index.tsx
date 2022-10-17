import { useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { fetcher } from "../utils/friendliness";

interface Props {
  name: string,
  forkable: boolean,
  forks: number,
  stars: number,
  watchers: number,
  open_issues: number,
  has_pages: boolean,
  has_contribute_guide: boolean
}

const Home: NextPage<Props> = (props) => {
  const [owner, setOwner] = useState<string>('');
  const [repo, setRepo] = useState<string>('');

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
        <div className="px-10 py-5 my-3 rounded-lg bg-gray-700 text-white">
          <div>http://localhost:3000/api/badge?owner={owner}&repo={repo}</div>
        </div>
        <div className="flex gap-10 mt-10 mb-5">
          <input className="border px-3 py-2" placeholder="owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
          <input className="border px-3 py-2" placeholder="repo" value={repo} onChange={(e) => setRepo(e.target.value)} />
        </div>
        <div className="px-5 py-3 bg-purple-300 hover:bg-purple-400 rounded-lg font-bold text-white hover:cursor-pointer">Check Project</div>
        <div className="my-3">
          <div>Name: {props.name}</div>
          <div>forkable: {props.forkable.toString()}</div>
          <div>forks: {props.forks}</div>
          <div>stars: {props.stars}</div>
          <div>watchers: {props.watchers}</div>
          <div>open issues: {props.open_issues}</div>
          <div>has page: {props.has_pages.toString()}</div>
          <div>has contribute guide: {props.has_contribute_guide.toString()}</div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const repo = await fetcher('61130061', 'NERDTree');

  return {
    props: {
      name: repo.name,
      forkable: repo.fork,
      forks: repo.forks_count,
      stars: repo.stargazers_count,
      watchers: repo.watchers_count,
      open_issues: repo.open_issues,
      has_pages: repo.has_pages,
      has_contribute_guide: repo.has_contribute_guide
    }
  }
}

export default Home;