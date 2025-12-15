import "@/styles/globals.css";
import "@/styles/animation.css";
import "@/styles/cssGrid.css";
import "@/styles/Home.module.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

import { PortfolioProvider } from "@/contextApi/PortfolioContext";
import ThemeProvider from "@/context/themeContext";

export default function App({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <ThemeProvider>
        <Head>
          {/* Primary SEO */}
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

          {/* Canonical */}
          <link
            href="https://upasana-s-expedition.vercel.app/"
            rel="canonical"
          />

          {/* Open Graph */}
          <meta content="website" property="og:type" />
          <meta
            content="Upasana Pan | Software Engineer | Upasana's Portfolio"
            property="og:title"
          />
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

          {/* Twitter */}
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
          <meta content="en" http-equiv="Content-Language" />

          {/* Structured Data for SEO */}
          <script type="application/ld+json">
            {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Person",
                      "name": "Upasana Pan",
                      "url": "https://upasana-s-expedition.vercel.app/",
                      "jobTitle": "Software Engineer",
                      "sameAs": [
                        "https://github.com/Upasana-610",
                        "https://www.linkedin.com/in/upasana-pan/"
                      ]
                    }
                  `}
          </script>

          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "WebSite",
                name: "Upa's Expeditions | Explore Blogs, Projects and many more.",
                url: "https://upasana-s-expedition.vercel.app/",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://upasana-s-expedition.vercel.app/?s={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
            type="application/ld+json"
          />
          {/* Your favicon link can also go here */}
          <link href="/favicon.ico" rel="icon" />

          {/*<!-- Google Verification meta tag --!>*/}
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
