import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>uix</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="rohan Phuke" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="rohan Phuke" />
        <meta
          name="description"
          content="Hey! I'm UiX Phuke, and I'm a Full Stack dev"
        />

        <meta property="og:title" content="rohan Phuke" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content="Hey! I'm UiX Phuke, and I'm a Full Stack dev"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rohanphuke" />
        <meta name="twitter:title" content="rohan Phuke" />
        <meta
          name="twitter:description"
          content="Hey! I'm UiX Phuke, and I'm a Full Stack dev"
        />
        <meta name="twitter:creator" content="@rohanphuke" />
        <meta name="twitter:image" content="" />

        {/* <meta itemprop="name" content="rohan Phuke"/>
        <meta itemprop="description" content="Hey! I'm uix-phuke, and I'm a Bachelor of Science in Information Technology graduate."/>
        <meta itemprop="image" content="https://deverajc.com/screenshot.png"/> */}
      </Head>
      <Home />
    </>
  );
}
