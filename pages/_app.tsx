import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="What The Park"
        description="Whether you're planning a family vacation, a solo backpacking expedition, or simply wish to learn more about the natural treasures that our nation has to offer, What The Park is your trusted companion on the journey to explore, appreciate, and protect these pristine and awe-inspiring landscapes."
        canonical="https://what-the-park.vercel.app/"
        openGraph={{
          url: "https://what-the-park.vercel.app/",
          title: "What The Park",
          description:
            "Whether you're planning a family vacation, a solo backpacking expedition, or simply wish to learn more about the natural treasures that our nation has to offer, What The Park is your trusted companion on the journey to explore, appreciate, and protect these pristine and awe-inspiring landscapes.",
          images: [
            {
              url: "https://res.cloudinary.com/dloisor1x/image/upload/v1703017611/what-the-park/og-img_pwhpgo.jpg",
              width: 1200,
              height: 630,
              alt: "What The Park Og Image",
              type: "image/jpeg",
            },
          ],
          siteName: "What The Park",
        }}
      />
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
