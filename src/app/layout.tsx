import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';
import React from "react";

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'DSR',
  description: 'Знищення тарганів, клопів, бліх у Франківську',
  keywords: 'Знищення тарганів, знищення бліх, знищення клопів',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body suppressHydrationWarning={true} className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
