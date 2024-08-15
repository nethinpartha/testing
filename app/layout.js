import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header";
import directus from '@/app/_utils/directus';

import { readItems } from '@directus/sdk';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import Footer from "@/app/_components/Footer";
async function getGlobals() {
  return directus.request(readItems('globals'));
}
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GTI - Your Partner in Banking",
  description: "GTI is a digital baking partner",
};

export default async function RootLayout({ children }) {
  const global = await getGlobals();
  // console.log(global);
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{global.title}</title>
        <meta name="description" content={global.tagline} />
        {/* <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}
      </head>
      <body className={`${inter.className} scrollbar-thumb-red-900 scrollbar-track-slate-300`}>
        <div className="scrollbar-thin bg-brand-bg h-screen w-screen overflow-x-hidden font-inter">
          <Header data={{ logo: global.logo, url: `${process.env.NEXT_PUBLIC_API_URL}/` }} />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}
