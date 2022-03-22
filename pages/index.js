import Head from "next/head";

export default function Home() {
  return (
    <div className="text-red-500">
      <Head>
        <title>InstaNext</title>
        <meta
          name="description"
          content="Instagram Clone with NextJS + Tailwind CSS "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      InstaNext
    </div>
  );
}
