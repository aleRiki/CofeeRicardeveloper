import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffe&mikel",
  description: "Cafeteria restaurante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={urbanist.className}>
      
        {children}
      
        </body>
    </html>
    </ClerkProvider>
  );
}
