'use client'
import "./globals.css";
import { Poppins } from '@next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { usePathname } from "next/navigation";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }) {
  const [showComponents, setShowComponents] = useState(false);
  const router = usePathname();

  useEffect(() => {
    // This runs on the client side
    setShowComponents(true);
  }, []);

  // Check if the pathname includes '/dashboard'
  const isDashboardRoute = router.includes('/dashboard');
  console.log(isDashboardRoute);
  

  return (
    <>
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <body className={poppins.className}>
        {!isDashboardRoute && <Navbar />}
        {children}
        {!isDashboardRoute && <Footer />}
      </body>
      </html>
    </>
  );
}
