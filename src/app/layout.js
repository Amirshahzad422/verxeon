import "./globals.css";
import CustomScrollbar from "@/components/CustomScrollbar";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

export const metadata = {
  title: "Sundown Studio",
  description: "Sundown Studio portfolio and experiences.",
  icons: {
    icon: "/images/icon.png",
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
