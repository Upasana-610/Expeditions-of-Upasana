import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
import LatestBlogs from "@/sections/LatestBlogs";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"));
const Footer = dynamic(() => import("@/layout/footer/Footer"));
const Intro = dynamic(() => import("@/sections/Intro"));
const Skills = dynamic(() => import("@/sections/Skills"));
const Projects = dynamic(() => import("@/sections/Projects"));
const SendMail = dynamic(() => import("@/utils/SendMail"));
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"));
const Feedback = dynamic(() => import("@/utils/Feedback"));

const Home = () => {
  return (
    <Fragment>
      <Head>
        {/* Primary SEO */}
        <title>
          Upasana Pan | Software Engineer | Upasana&apos;s Portfolio
        </title>

        <meta
          name="description"
          content="Upasana's Expeditions – Personal portfolio of Upasana Pan, a Software Engineer. Explore projects, tech stack, experience, blogs, and contact information."
        />

        <meta name="author" content="Upasana Pan" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href="https://upasana-s-expedition.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Upasana Pan | Software Engineer | Upasana's Portfolio"
        />
        <meta
          property="og:description"
          content="Portfolio website of Upasana Pan, Software Engineer."
        />
        <meta
          property="og:image"
          content="https://upasana-s-expedition.vercel.app/myimage/Pink.png"
        />
        <meta property="og:url" content="https://upasana-s-expedition.vercel.app/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Upasana Pan | Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Portfolio website of Upasana, Software Engineer."
        />
        <meta
          name="twitter:image"
          content="https://upasana-s-expedition.vercel.app/myimage/Pink.png"
        />
        <meta http-equiv="Content-Language" content="en" />

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

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Upasana's Portfolio",
              "url": "https://upasana-s-expedition.vercel.app/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://upasana-s-expedition.vercel.app/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        {/* <!-- Favicon --> */}
        <link href="/pinkfavicon.ico" rel="icon" />
      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Projects */}
          <Projects />
          {/*Blogs*/}
          {/* <LatestBlogs /> */}
          {/* Experience */}
          <Experience />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* SocialMedia */}
          <SocialMedia />
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
          {/* Feedback Modal */}
          <Feedback />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
