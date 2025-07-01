import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import Script from "next/script";
import { ViewTransitions } from "next-view-transitions";

const Helvetica = localFont({
  src: [
    {
      path: "../public/fonts/helveticabold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/helveticamedium.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata = {
  title: "Évelle",
  description:
    "Évelle is a Paris-based fashion house crafting expressive, sculptural garments that blur the line between clothing, performance, and art.",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <SmoothScroll>
        <html
          lang="en"
          className="view-transition-enabled"
          style={{ viewTransitionName: "root" }}
        >
          <head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <Script
              data-website-id="685ac407da53248ffa7e04dd"
              data-domain="evelle.vercel.app"
              src="/js/script.js"
              strategy="afterInteractive"
            />
          </head>
          <body
            className={`${Helvetica.variable} antialiased w-screen font-helvetica overflow-x-hidden text-primary tracking-tighter`}
          >
            {children}
          </body>
        </html>
      </SmoothScroll>
    </ViewTransitions>
  );
}
