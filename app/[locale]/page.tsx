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

  alternates: {
    canonical: "https://premiumuytozalash.uz/en",
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