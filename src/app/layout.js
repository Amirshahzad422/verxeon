import "./globals.css";
import CustomScrollbar from "@/components/CustomScrollbar";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

export const metadata = {
  title: {
    default: "Verxeon | Software That Thinks",
    template: "%s | Verxeon",
  },
  description: "AI & Software Solutions for Forward-Thinking Businesses",
  keywords: "AI development company, custom software agency, AI automation solutions, machine learning engineering, digital transformation, software development Dubai, AI agents, MLOps, RAG pipelines, enterprise software",
  authors: [{ name: "Verxeon" }],
  creator: "Verxeon",
  publisher: "Verxeon",
  // TODO: Switch to https://verxeon.com when custom domain is live
  metadataBase: new URL("https://verxeon.vercel.app"),
  alternates: {
    canonical: "https://verxeon.com",
  },
  openGraph: {
    title: "Verxeon | Software That Thinks",
    description: "AI & Software Solutions for Forward-Thinking Businesses",
    url: "https://verxeon.vercel.app",
    siteName: "Verxeon",
    images: [
      {
        url: "/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "Verxeon — Software That Thinks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verxeon | Software That Thinks",
    description: "AI & Software Solutions for Forward-Thinking Businesses",
    images: ["/og/og-home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/dot.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VerXeon Technologies",
  alternateName: "VerXeon",
  url: "https://verxeon.com",
  logo: "https://verxeon.com/verxeon-logo.png",
  description: "AI-Powered Software Development Agency building intelligent systems, AI automation solutions, and scalable digital products for enterprises worldwide.",
  foundingDate: "2025",
  email: "contact@verxeon.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [
    "https://www.linkedin.com/company/verxeon/",
    "https://www.instagram.com/Verxeon.ai/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    ratingCount: "30",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Custom Software Development",
    "AI Automation",
    "Digital Transformation",
    "Cloud Architecture",
    "MLOps",
    "RAG Pipelines",
    "Large Language Models",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technology Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strategy", description: "Market research, product roadmaps, tech consulting, KPI frameworks" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Design", description: "UI/UX design, brand identity, prototyping, design systems" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engineering", description: "Web apps, mobile apps, cloud architecture, APIs" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Data", description: "Machine learning, data engineering, AI agents, MLOps, predictive analytics" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emerging Tech", description: "AR/VR, IoT solutions, blockchain, RPA" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Optimization", description: "Software audits, QA testing, performance engineering, security" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth", description: "Performance marketing, SEO, CRO, analytics" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engagement", description: "Dedicated teams, staff augmentation, offshore centers" }},
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="author" href="https://verxeon.com/llms.txt" type="text/plain" title="LLM Summary" />
        <link rel="alternate" href="https://verxeon.com/llms-full.txt" type="text/plain" title="LLM Full Overview" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <CustomScrollbar />
      </body>
    </html>
  );
}
