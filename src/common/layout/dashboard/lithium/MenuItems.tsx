import { routes } from "@/config/routes";
import { DUMMY_ID } from "@/config/constants";

export interface SubMenuItemType {
  name: string;
  description?: string;
  href: string;
}

export interface DropdownItemType {
  name: string;
  icon: JSX.Element;
  href?: string;
  description?: string;
  subMenuItems?: SubMenuItemType[];
}

export type menuType = "link" | "collapse" | "enhance";

export interface MenuItemsType {
  id: string;
  name: string;
  type: menuType;
  popoverContentClassName?: string;
  dropdownItems?: DropdownItemType[];
}

export const menuItems: MenuItemsType[] = [
  {
    id: "1",
    name: "Dashboard",
    type: "link",
    popoverContentClassName: "flex flex-col",
  },
];
