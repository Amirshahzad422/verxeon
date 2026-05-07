import "./globals.css";
import ScrollbarManager from "@/components/ScrollbarManager";
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
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <ScrollbarManager />
      </body>
    </html>
  );
}
