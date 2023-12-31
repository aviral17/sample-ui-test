// https://www.youtube.com/watch?v=9fU8YL0jyIA&ab_channel=FullStackNiraj

import { NextAuthProvider } from "./providers";
// import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Login from "@/components/utils/Login";
import Register from "@/components/utils/Register";
import { useSession } from "next-auth/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  console.log("Get Server Session =", session);
  console.log("Session>>>>>> =", !!session?.user);

  return (
    <NextAuthProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={inter.className}>
          {/* <SessionProvider session={session}>
          {!session ? <Login /> : children}
        </SessionProvider> */}
          {/* <Navbar />
        {children} */}

          {/* <SessionProvider session={session}>
          {session ? <Navbar /> : null}
          {!session ? <Register /> : children}
        </SessionProvider> */}
          {!!session?.user ? <Navbar /> : null}
          {!!session?.user ? children : <Register />}
        </body>
      </html>
    </NextAuthProvider>
  );
}
