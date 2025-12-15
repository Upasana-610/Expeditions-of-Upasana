// pages/_app.js
import "@/styles/globals.css";
import "@/styles/animation.css";
import "@/styles/cssGrid.css";
import "@/styles/Home.module.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head"; // Make sure this is imported from 'next/head'

import { PortfolioProvider } from "@/contextApi/PortfolioContext";
import ThemeProvider from "@/context/themeContext";

export default function App({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <ThemeProvider>
        <Head>
          {/* Primary SEO - Remains here for easy overriding on individual pages */}
          <title>
            Upasana Pan | Software Engineer | Upasana&apos;s Portfolio
          </title>
          <meta
            content="Upasana's Expeditions – Personal portfolio of Upasana Pan, a Software Engineer. Explore projects, tech stack, experience, blogs, and contact information."
            name="description"
          />
          <meta content="Upasana Pan" name="author" />
          <meta content="index, follow" name="robots" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="en" http-equiv="Content-Language" />{" "}
          {/* Keep Content-Language here */}
          {/* Canonical - Remains here as a global fallback */}
          <link
            href="https://upasana-s-expedition.vercel.app/"
            rel="canonical"
          />
          {/* Open Graph & Twitter - Remains here */}
          <meta content="website" property="og:type" />
          <meta
            content="Upasana Pan | Software Engineer | Upasana's Portfolio"
            property="og:title"
          />
          <meta content="Upa's Expeditions" property="og:site_name" />
          <meta
            content="Portfolio website of Upasana Pan, Software Engineer."
            property="og:description"
          />
          <meta
            content="https://upasana-s-expedition.vercel.app/myimage/Pink.png"
            property="og:image"
          />
          <meta
            content="https://upasana-s-expedition.vercel.app/"
            property="og:url"
          />
          <meta content="summary_large_image" name="twitter:card" />
          <meta
            content="Upasana Pan | Software Engineer"
            name="twitter:title"
          />
          <meta
            content="Portfolio website of Upasana, Software Engineer."
            name="twitter:description"
          />
          <meta
            content="https://upasana-s-expedition.vercel.app/myimage/Pink.png"
            name="twitter:image"
          />
          {/* Favicon & Google Verification - Remains here */}
          <link href="/pinkfavicon.ico" rel="icon" />
          <meta
            content="qDOCh_pdt1qxv30uZgFBlhUe6uo4ehCaqQt17mSgse0"
            name="google-site-verification"
          />
        </Head>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </PortfolioProvider>
  );
}
