import { Inter } from 'next/font/google';
import './globals.css';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Animations from './animations';
import Header from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Rogelio Gracia Otalvaro - Portfolio",
  description: 'Ph.D. Candidate in Computer Science and Electrical Engineering specializing in resilience engineering, machine learning, and complex systems analysis.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload Google Analytics */}
        <link
          rel="preload"
          href="https://www.googletagmanager.com/gtag/js?id=G-K0L6C0ZB98"
          as="script"
        />
      </head>
      <body className="overflow-x-hidden">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K0L6C0ZB98"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K0L6C0ZB98');
          `}
        </Script>
        <Animations>
          <Header />
          <div className="flex flex-col bg-background text-foreground">
            <main className={`flex-grow ${inter.className}`}>{children}</main>
          </div>
          <Toaster />
        </Animations>
      </body>
    </html>
  );
}
