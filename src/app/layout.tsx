import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";
import "./brand.css";
import "./tailwind.css";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://academy.sunkova.com",
  ),
  title: {
    default: "Sunkova Academy — Build What’s Next",
    template: "%s | Sunkova Academy",
  },
  description:
    "Challenge-based education in AI design, engineering, security, mobile development, and 3D. An education company from the Sunkova Studio in Nairobi.",
  icons: {
    apple: "/assets/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sunkova Academy",
    description: "Learn it. Build it. Ship it.",
    type: "website",
    images: ["/assets/brand/preview-site-light.jpg"],
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7f8",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         <SmoothScroll />
        <ThemeProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
