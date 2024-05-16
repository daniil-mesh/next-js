import React from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Sidebar from '@/components/sidebar/sidebar';
import styles from './layout.module.css';
import './globals.css';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <Sidebar className={styles.sidebar} />
          {children}
          <Footer className={styles.footer} />
        </div>
      </body>
    </html>
  );
}
