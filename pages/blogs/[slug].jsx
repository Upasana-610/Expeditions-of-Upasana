import fs from "fs";
import path from "path";
import { marked } from "marked";
import Image from "next/image";
import Head from "next/head";

import { BlogsData } from "../../constants/BlogsData";

import Navbar from "@/layout/navbar/Navbar";

export default function BlogPage({ heading, image, content, slug, description }) {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": heading,
  "image": image,
  "author": {
    "@type": "Person",
    "name": "Upasana Pan"
  }
};
  return (
    <>
      <Head>
        <title>{`${heading}`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={heading} />
        <meta property="og:image" content={image} />
        <link rel="canonical" href={`https://upasana-s-expedition.vercel.app/blogs/${slug}`} />
        <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      </Head>
      
      <Navbar />
      <div className="w-fit mx-auto px-8">
        {" "}
        <div className="relative w-fit mx-auto pt-14">
          {" "}
          <h1 className="md:text-center mt-16 mb-14 font-semibold text-2xl md:text-3xl text-red-500 dark:text-[#07d0e5]">
            {heading}
          </h1>
          <span className="absolute bottom-[-8px] left-0 h-1 bg-blue-500 animate-slideToAndFro">
            {" "}
          </span>
        </div>
      </div>
      <div className="p-8 mx-auto" style={{ maxWidth: "800px" }}>
        <Image
          alt={heading}
          className="mx-auto"
          height={400}
          src={image}
          style={{ borderRadius: "8px", objectFit: "cover" }}
          width={600}
        />

        <div
          className="prose dark:prose-invert md:text-center mt-14"
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ maxWidth: "800px" }}
        />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = BlogsData.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = BlogsData.find((b) => b.slug === params.slug);

  if (!blog) {
    return { notFound: true };
  }

  const filePath = path.join(process.cwd(), "blogContent", `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const convertedHTML = marked(fileContent);

  return {
    props: {
      heading: blog.heading,
      image: blog.image,
      content: convertedHTML,
      description: blog.description,
      slug: blog.slug
    },
  };
}
