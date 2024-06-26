import { Noto_Sans_KR } from 'next/font/google';
import React from 'react';
import type { Metadata } from 'next';

import Footer from '@/layout/footer/footer';
import Header from '@/layout/header/header';
import Main from '@/layout/main/main';
import Sidebar from '@/layout/sidebar/sidebar';
import Up from '@/components/up/up';

import './globals.css';
import styles from './layout.module.css';

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
          <Main className={styles.body}>{children}</Main>
          <Footer className={styles.footer} />
          <Up />
        </div>
      </body>
    </html>
  );
}
