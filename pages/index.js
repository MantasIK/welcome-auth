import Head from "next/head";
import { useSession } from "next-auth/client";

import SignIn from "../components/SignIn";
import UserForm from "../components/UserForm";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div>
      <Head>
        <title>Welcome Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <h1 className="title">
          Minority Programmers <br /> Association
        </h1>
      </header>
      <main className="main">
        {loading ? <div>Loading...</div> : null}
        {session ? <UserForm {...session} /> : <SignIn {...session} />}
      </main>
    </div>
  );
}
