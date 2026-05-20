import type { Metadata } from "next";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';

type Locale = "uz" | "ru" | "en";

const metadataTranslations = {
  uz: {
    title: "Premium Toza | Professional Tozalash Xizmati",
    description:
      "Toshkentdagi professional uy, ofis va general tozalash xizmati.",
  },
  ru: {
    title: "Premium Toza | Профессиональная уборка",
    description:
      "Профессиональная уборка квартир, офисов и помещений в Ташкенте.",
  },
  en: {
    title: "Premium Toza | Professional Cleaning Service",
    description:
      "Professional apartment, office and deep cleaning service in Tashkent.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const meta =
    metadataTranslations[locale] || metadataTranslations.uz;

  return {
    metadataBase: new URL("https://premiumuytozalash.uz"),

    title: {
      default: meta.title,
      template: `%s | Premium Toza`,
    },

    description: meta.description,

    keywords: [
      "cleaning service tashkent",
      "tozalash xizmati",
      "general cleaning",
      "uy tozalash",
      "office cleaning",
      "premium toza",
    ],

    alternates: {
      canonical: `/${locale}`,
      languages: {
        uz: "/uz",
        ru: "/ru",
        en: "/en",
      },
    },

    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://premiumuytozalash.uz/${locale}`,
      siteName: "Premium Toza",
      locale:
        locale === "ru"
          ? "ru_RU"
          : locale === "en"
          ? "en_US"
          : "uz_UZ",
      type: "website",

      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "Premium Toza",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/logo.png"],
    },

    robots: {
      index: true,
      follow: true,
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;

  const descriptions = {
    uz: "Toshkentdagi professional tozalash xizmati",
    ru: "Профессиональная уборка в Ташкенте",
    en: "Professional cleaning service in Tashkent",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",

    name: "Premium Toza",

    image: "https://premiumuytozalash.uz/logo.png",

    url: `https://premiumuytozalash.uz/${locale}`,

    telephone: "+998998184200",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },

    areaServed: {
      "@type": "City",
      name: "Tashkent",
    },

    description: descriptions[locale],

    priceRange: "$$",

    sameAs: ["https://t.me/tritonium"],
  };

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}