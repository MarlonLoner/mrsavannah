import { siteContent } from "./siteContent";

const siteUrl = siteContent.brand.siteUrl;
const imageUrl = `${siteUrl}/og-image.svg`;

const sameAs = ["https://github.com/MarlonLoner"];

// Add these profile URLs to sameAs after the live accounts are confirmed:
// LinkedIn, Facebook, Instagram, Behance, YouTube, TikTok, and X.
export const pendingSocialProfiles = [
  { label: "LinkedIn", href: "Replace with live LinkedIn profile URL" },
  { label: "Facebook", href: "Replace with live Facebook profile URL" },
  { label: "Instagram", href: "Replace with live Instagram profile URL" },
  { label: "Behance", href: "Replace with live Behance profile URL" },
  { label: "YouTube", href: "Replace with live YouTube channel URL" },
  { label: "TikTok", href: "Replace with live TikTok profile URL" },
  { label: "X", href: "Replace with live X profile URL" },
];

export const seoContent = {
  siteUrl,
  canonicalUrl: `${siteUrl}/`,
  title: "Mr Savannah | Marlon Kuvawoga | AI Marketing Systems & Brand Strategy",
  description:
    "Marlon Kuvawoga, known as Mr Savannah, helps brands use storytelling, AI marketing systems, lead generation and conversion strategy to turn attention into sales.",
  imageUrl,
  sameAs,
};

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#marlon-kuvawoga`,
    name: "Marlon Kuvawoga",
    alternateName: ["Mr Savannah", "Marlon Loner Kuvawoga"],
    description:
      "Zimbabwean brand strategist, AI marketing systems builder and storytelling creator based in Harare.",
    url: `${siteUrl}/`,
    image: imageUrl,
    jobTitle: [
      "Brand Strategist",
      "AI Marketing Systems Builder",
      "Digital Marketer",
      "Storytelling Strategist",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harare",
      addressCountry: "Zimbabwe",
    },
    sameAs,
    brand: {
      "@id": `${siteUrl}/#mr-savannah-brand`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Brand",
    "@id": `${siteUrl}/#mr-savannah-brand`,
    name: "Mr Savannah",
    alternateName: ["Marlon Kuvawoga", "Marlon Loner Kuvawoga"],
    description:
      "AI marketing systems, storytelling strategy, lead generation and brand strategy by Marlon Kuvawoga in Zimbabwe.",
    url: `${siteUrl}/`,
    slogan: "I design brands that sell without constant selling.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Mr Savannah",
    alternateName: "Marlon Kuvawoga",
    url: `${siteUrl}/`,
    description:
      "Official identity hub for Mr Savannah, Marlon Kuvawoga, AI marketing systems and brand strategy in Zimbabwe.",
    publisher: {
      "@id": `${siteUrl}/#marlon-kuvawoga`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile-page`,
    name: "Mr Savannah | Marlon Kuvawoga",
    url: `${siteUrl}/`,
    description:
      "Profile page for Marlon Kuvawoga, popularly known as Mr Savannah, a Zimbabwean brand strategist and AI marketing systems builder.",
    mainEntity: {
      "@id": `${siteUrl}/#marlon-kuvawoga`,
    },
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Mr Savannah",
    alternateName: "Marlon Kuvawoga",
    url: `${siteUrl}/`,
    founder: {
      "@id": `${siteUrl}/#marlon-kuvawoga`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harare",
      addressCountry: "Zimbabwe",
    },
    sameAs,
  },
];
