import "~/styles/globals.css";

import { Open_Sans } from "next/font/google";
import { headers } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "~/app/_components/navbar";
import Footer from "~/app/_components/footer";
import React from "react";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "IEEE SB MUJ",
  description: "IEEE Student Branch, Manipal University Jaipur is a group of driven individuals striving to create and spread awareness about various technologies that surround us.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({

  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${open_sans.variable}`}>
      <Navbar/>
      <div className="min-h-screen">
          <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
      </div>
      <Footer/>
      </body>
    </html>
  );
}
