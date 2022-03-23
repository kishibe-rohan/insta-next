import Head from "next/head";
import Image from "next/image";

import { useRouter } from "next/router";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { Navbar } from "../../components";

const signin = ({ providers }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Login - Insta Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img className="w-40" src="https://i.ibb.co/5sS5PpM/logolight.png" />
        <p className="font-xs italic">
          InstaNext | Instagram Clone with NextJS
        </p>
        <div className="mt-20">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="p-3 bg-blue-500 rounded-lg text-white"
              >
                Sign In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signin;
