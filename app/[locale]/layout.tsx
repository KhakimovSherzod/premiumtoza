import type { Metadata } from "next";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {

  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "metadata.layout"
  });

  return {
    
    title: {
      default: t("title"),
      template: "%s | Premium Tozalash xizmati",
    },

    description: t("description"),

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
      t("keywords.cleaning"),
      t("keywords.homeCleaning"),
      t("keywords.officeCleaning"),
      t("keywords.cleaningService"),
    ],

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://premiumuytozalash.uz",
      siteName: "VIDO Premium Toza",
      locale,
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "Cleaning Service",
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Props) {

  const { locale } = await params;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}