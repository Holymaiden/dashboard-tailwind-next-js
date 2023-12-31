import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

enum MODE {
  DARK = "dark",
  LIGHT = "light",
}

export const siteConfig = {
  title: "Create Next App",
  description: "Generated by create next app",
  mode: MODE.LIGHT,
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description?: string
): Metadata => {
  return {
    title: title ? `${title} - Fihaa App` : siteConfig.title,
    description: description ? description : siteConfig.description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Fihaa App` : title,
      description: description ? description : siteConfig.description,
      url: "",
      siteName: "Fihaa App", // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: "",
        width: 1200,
        height: 630,
      },
      locale: "id_ID",
      type: "website",
    },
  };
};
