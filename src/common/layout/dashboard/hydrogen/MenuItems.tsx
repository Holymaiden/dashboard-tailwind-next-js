// import { routes } from "@/config/routes";
// import { DUMMY_ID } from "@/config/constants";
import { PiShoppingCartDuotone, PiFileImageDuotone } from "react-icons/pi";

export interface MenuItemProps {
  name: string;
  href?: string;
  icon?: JSX.Element;
  dropdownItems?: MenuItemProps[];
}

// Note: do not add href in the label object, it is rendering as label
const MenuItems: MenuItemProps[] = [
  // label start
  {
    name: "Home",
  },
  // label end
  {
    name: "File Manager",
    href: "/",
    // href: routes.file.dashboard,
    icon: <PiFileImageDuotone />,
  },
  // label start
  {
    name: "Apps Kit",
  },
  // label end
  {
    name: "E-Commerce",
    href: "#",
    icon: <PiShoppingCartDuotone />,
  },
];

export default MenuItems;
