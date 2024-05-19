import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import { TailwindToaster } from "@/components/shared/tailwind-toaster";
import { ClientSideEffects } from "@/components/shared/client-side-effects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Компанія Свердловина",
  description: "Сайт компанії Свердловина",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = require(`../../../messages/${locale}.json`);
  return (
    <html lang={locale} data-theme="light">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/futura-font@1.0.0/styles.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <ClientSideEffects />
          <TailwindToaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
