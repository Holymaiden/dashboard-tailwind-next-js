import { routes } from "@/config/routes";

// Note: do not add href in the label object, it is rendering as label
export const pageLinks = [
  // label start
  {
    name: "Home",
  },
  // label end
  {
    name: "E-Commerce",
    href: routes.dashboard.home,
  },
];
