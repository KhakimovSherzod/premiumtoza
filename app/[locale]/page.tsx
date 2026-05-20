import  HomePage  from "./HomePage";
import { Metadata } from "next";




export const metadata: Metadata = {
  metadataBase: new URL("https://premiumuytozalash.uz"),

  title: {
    default: "Premium Toza | Professional Cleaning Service in Tashkent",
    template: "%s | Premium Toza",
  },

  description:
    "Premium Toza offers professional apartment, office, deep cleaning and post-renovation cleaning services in Tashkent.",
  icons: {
    icon: [
      {
        url:"/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: ["/favicon.ico"],
  },

  keywords: [
    "cleaning service tashkent",
    "tozalash xizmati",
    "general cleaning tashkent",
    "uy tozalash",
    "office cleaning tashkent",
    "professional cleaning uzbekistan",
    "premium toza",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Premium Toza | Professional Cleaning Service",
    description:
      "Professional cleaning services in Tashkent for apartments, offices and post-renovation cleaning.",
    url: "https://premiumuytozalash.uz",
    siteName: "Premium Toza",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Premium Toza Cleaning Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Premium Toza",
    description:
      "Professional cleaning service in Tashkent.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



export default function Page  ()  {
  return <HomePage />;
}