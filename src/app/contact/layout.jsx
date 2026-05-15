export const metadata = {
    title: "Contact Verxeon",
    description: "Get in touch with Verxeon to discuss your AI, software development, or digital transformation project.",
    openGraph: {
        title: "Contact Verxeon",
        description: "Have a project in mind? Let's build something intelligent together.",
        url: "https://verxeon.com/contact",
        images: [
            {
                url: "/og/og-contact.png",
                width: 1200,
                height: 630,
                alt: "Contact Verxeon",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Verxeon",
        description: "Have a project in mind? Let's build something intelligent together.",
        images: ["/og/og-contact.png"],
    },
    alternates: {
        canonical: "https://verxeon.com/contact",
    },
};

export default function ContactLayout({ children }) {
    return children;
}
