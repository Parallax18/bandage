import type { Metadata } from "next";
import "./globals.css";
import ProviderRoot from "@/providers";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/layout/Banner";
import { Container } from "@mui/material";
import React from "react";

export const metadata: Metadata = {
  title: "Bandage",
  description: "Problems trying to resolve the conflict between",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderRoot>
          <Banner />
          <Nav />
          <Container maxWidth={"lg"}>{children}</Container>
          <Footer />
        </ProviderRoot>
      </body>
    </html>
  );
}
