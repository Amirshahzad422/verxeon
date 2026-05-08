import "./globals.css";
import CustomScrollbar from "@/components/CustomScrollbar";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

export const metadata = {
  title: "VerXeon technologies",
  description: "Verxeon delivers intelligent software built to perform at the highest level.",
  icons: {
    icon: "/images/dot.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <CustomScrollbar />
      </body>
    </html>
  );
}
