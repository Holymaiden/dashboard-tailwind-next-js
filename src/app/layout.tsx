import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";

import { inter, lexendDeca } from "@/app/fonts";
import clsxm from "@/common/libs/clsxm";
import ThemeProvider from "@/theme/theme-provider";
import GlobalDrawer from "@/common/components/DrawerViews";
import GlobalModal from "@/common/components/ModalViews";
import { siteConfig } from "@/config/site.config";

const NextProgress = dynamic(
  () => import("@/common/components/NextProgress"),
  {
    ssr: false,
  }
);

import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr" // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <body
        className={clsxm(inter.variable, lexendDeca.variable, "font-inter")}
      >
        <ThemeProvider>
          <NextProgress />
          {children}
          <Toaster />
          <GlobalDrawer />
          <GlobalModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
