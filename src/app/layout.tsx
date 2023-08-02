import "../styles/index.css";
import type { Metadata, NextPage } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Particles from "react-particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Conductor",
  description: "Super Conductor",
  icons: [
    {
      rel: "shortcut icon",
      url: "/favicon.ico",
    },
  ],
};

const Layout: NextPage<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default Layout;
