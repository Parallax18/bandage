import type { Metadata } from "next";
import "./globals.css";
import ProviderRoot from "@/providers";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/layout/Banner";
import React from "react";
import NavBar from "@/components/layout/NavBar";
import { Box } from "@mui/material";

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
          <NavBar />
          <Box mt={"8rem"}>{children}</Box>
          <Footer />
        </ProviderRoot>
      </body>
    </html>
  );
}
