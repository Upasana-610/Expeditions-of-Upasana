// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    // We define the Schema Markup as JS objects first for cleaner code
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Upasana Pan",
      "url": "https://upasana-s-expedition.vercel.app/",
      "jobTitle": "Software Engineer",
      "sameAs": [
        "https://github.com/Upasana-610",
        "https://www.linkedin.com/in/upasana-pan/"
      ]
    };
    
    const websiteSchema = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "Upa's Expeditions | Explore Blogs, Projects and many more.",
      "url": "https://upasana-s-expedition.vercel.app/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://upasana-s-expedition.vercel.app/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };

    return (
      <Html lang="en"> 
        <Head>
          {/* CRITICAL: Only static document-level content belongs here. 
            All other meta tags are in _app.js.
          */}

          {/* 1. Person Schema Markup */}
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(personSchema),
            }}
            type="application/ld+json"
          />

          {/* 2. WebSite Schema Markup (This will help change the "Vercel" text) */}
          <script
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema),
            }}
            type="application/ld+json"
          />
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;