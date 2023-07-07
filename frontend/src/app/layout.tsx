import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {/*<style jsx>{`*/}
        {/*  :global(.js-focus-visible) :focus:not(.focus-visible) {*/}
        {/*    outline: none;*/}
        {/*  }*/}
        {/*`}</style>*/}
      </body>
    </html>
  );
}
