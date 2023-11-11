import "~/styles/globals.css";
import { Montserrat } from "next/font/google";
import { headers } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "~/app/components/navbar";
import Footer from "~/app/components/footer";
import React from "react";


const global_fonts = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`font-sans ${global_fonts.variable}`}>
      <Navbar/>
      <div className="min-h-screen">
          <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
      </div>
      <Footer/>
      </body>
    </html>
  );
}
