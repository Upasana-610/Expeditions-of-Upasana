import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import { BlogsData } from "@/constants/BlogsData";
import Navbar from "@/layout/navbar/Navbar";

export default function BlogList({ blogs }) {
  return (
    <>
     <Head>
        <title>Technical Blogs | AI, Data, Engineering & Insights</title>
        <meta 
          name="description" 
          content="Deep dive into networking, software engineering, and web development. Explore technical guides, articles and business insights." 
        />
        <link rel="canonical" href="https://upasana-s-expedition.vercel.app/blogs" />
        
        {/* Social Media Preview */}
        <meta property="og:title" content="Technical Blog | Upa's Expeditions" />
        <meta property="og:description" content="Technical guides and software engineering insights." />
        <meta property="og:image" content="https://upasana-s-expedition.vercel.app/myimage/Pink.png" />
        <meta name="twitter:card" content="summary_large_image" />
     </Head>
      <Navbar />

      <div className="p-12 min-h-screen">
        <h1 className="mt-16 mb-10 font-semibold text-2xl md:text-3xl text-[#0556B1] dark:text-[#c72c6c]">
          All Blogs
        </h1>

        {/* Grid of blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.slug}>
              <div
                className="border border-[#252323] rounded-lg p-4 dark:border-[#ddd]
  w-full flex flex-col
  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  alt={blog.heading}
                  className="rounded-md object-contain"
                  height={500}
                  src={blog.image}
                  width={650}
                />

                <h2 className="text-2xl text-red-800 dark:text-white mt-4">
                  {blog.heading}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      blogs: BlogsData,
    },
  };
}
