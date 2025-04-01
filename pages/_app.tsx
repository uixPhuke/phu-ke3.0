import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Syne } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Importing the Syne font with specified weights and subsets
const syne = Syne({
  weight: ["400", "500", "600", "700"], // Specify the font weights you need
  subsets: ["latin"], // Specify the subsets you need
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={syne.className}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
