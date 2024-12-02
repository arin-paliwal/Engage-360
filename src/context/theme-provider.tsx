"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { childrenInterface } from "../types/globals";

export function ThemeProvider({ children }: childrenInterface) {
  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}
