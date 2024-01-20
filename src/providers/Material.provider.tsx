// app/providers.tsx
"use client";

import { theme } from "@/material.theme";
import { ThemeProvider } from "@mui/material";

export function Materialprovider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
