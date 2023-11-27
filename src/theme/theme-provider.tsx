"use client";

import { siteConfig } from "@/config/site.config";
import hideRechartsConsoleError from "@/common/utils/recharts-console-error";
import { ThemeProvider as NextThemeProvider } from "next-themes";

hideRechartsConsoleError();

export default function ThemeProvider({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <NextThemeProvider
      enableSystem={false}
      defaultTheme={String(siteConfig.mode)}
    >
      {children}
    </NextThemeProvider>
  );
}
