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
          content="Upasana's Expeditions – Personal portfolio of Upasana Pan, a Software Engineer. Explore projects, tech stack, experience, blogs, and contact information."
          name="description"
        />

        <meta content="Upasana Pan" name="author" />
        <meta content="index, follow" name="robots" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* Canonical */}
        <link href="https://upasana-s-expedition.vercel.app/" rel="canonical" />
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
