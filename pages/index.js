import Head from "next/head";

import { Feed, Navbar, Sidebar, Rightbar, Stories } from "../components";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>InstaNext</title>
        <meta
          name="description"
          content="Instagram Clone with NextJS + Tailwind CSS "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Feed />
    </div>
  );
}
