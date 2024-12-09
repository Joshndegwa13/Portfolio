import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const siteMetadata = {
    title: "Joshua Ndegwa | Portfolio",
    description: "Web Developer specializing in creating beautiful and functional web experiences",
    siteUrl: "https://joshuandegwa.com",
    image: "/preview.png",
    twitterUsername: "@joshuandegwa",
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteMetadata.title}</title>
      <meta name="title" content={siteMetadata.title} />
      <meta name="description" content={siteMetadata.description} />
      <meta name="keywords" content="web developer, frontend developer, react developer, joshua ndegwa" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={siteMetadata.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteMetadata.siteUrl} />
      <meta property="twitter:title" content={siteMetadata.title} />
      <meta property="twitter:description" content={siteMetadata.description} />
      <meta property="twitter:image" content={siteMetadata.image} />
      <meta property="twitter:creator" content={siteMetadata.twitterUsername} />

      {/* PWA primary color */}
      <meta name="theme-color" content="#0D9488" />

      {/* Fonts preload */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap"
        as="style"
      />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Joshua Ndegwa" />
    </Helmet>
  );
};

export default SEO;