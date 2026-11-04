import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { dictionaries } from "@/content/copy";
import { profile } from "@/content/profile";
import { isLocale, localeMigrationScript, locales } from "@/lib/locale";
import { siteUrl } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import "../globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "es";
  const copy = dictionaries[locale];

  return {
    metadataBase: new URL(siteUrl()),
    title: copy.meta.title,
    description: copy.meta.description,
    authors: [{ name: profile.name }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      locale: copy.meta.ogLocale,
      alternateLocale: locale === "es" ? ["en_US"] : ["es_LA"],
      type: "website",
      siteName: profile.name,
      url: `/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1eeed" },
    { media: "(prefers-color-scheme: dark)", color: "#262626" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "es";

  return (
    <html
      lang={locale}
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeMigrationScript }} />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
