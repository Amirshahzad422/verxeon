export const metadata = {
  title: "Services",
  description: "Explore Verxeon's full service catalog — Strategy, Design, Engineering, AI & Data, Emerging Tech, Optimization, Growth, and Engagement.",
  openGraph: {
    title: "Services | Verxeon",
    description: "AI & software services designed to help your business scale — from strategy and design to engineering and growth.",
    url: "https://verxeon.vercel.app/services",
    images: [
      {
        url: "/og/og-services.png",
        width: 1200,
        height: 630,
        alt: "Verxeon Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Verxeon",
    description: "AI & software services designed to help your business scale — from strategy and design to engineering and growth.",
    images: ["/og/og-services.png"],
  },
  alternates: {
    canonical: "https://verxeon.vercel.app/services",
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
