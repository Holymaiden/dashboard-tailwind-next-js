import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";

import { inter, lexendDeca } from "@/app/fonts";
import clsxm from "@/common/libs/clsxm";
import ThemeProvider from "@/theme/theme-provider";
import GlobalDrawer from "@/common/components/DrawerViews";
import GlobalModal from "@/common/components/ModalViews";
import { siteConfig } from "@/config/site.config";
import { authOptions } from "./api/auth/[...nextauth]/route";
import AuthProvider from "@/common/context/AuthProvider";

const NextProgress = dynamic(() => import("@/common/components/NextProgress"), {
  ssr: false,
});

import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html
      lang="en"
      dir="ltr" // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <body
        className={clsxm(inter.variable, lexendDeca.variable, "font-inter")}
      >
        <AuthProvider session={session}>
          <ThemeProvider>
            <NextProgress />
            {children}
            <Toaster />
            <GlobalDrawer />
            <GlobalModal />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
