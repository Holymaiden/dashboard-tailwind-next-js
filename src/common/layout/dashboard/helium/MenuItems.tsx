import { routes } from "@/config/routes";
import { DUMMY_ID } from "@/config/constants";
import {
  PiShoppingCartFill,
  PiHeadsetFill,
  PiPackageFill,
  PiChartBarFill,
  PiFileImageFill,
  PiCurrencyDollarFill,
  PiSquaresFourFill,
  PiGridFourFill,
  PiFeatherFill,
  PiChartLineUpFill,
  // PiImageFill,
  PiMapPinLineFill,
  PiUserGearFill,
  PiBellSimpleRingingFill,
  PiUserFill,
  PiEnvelopeSimpleOpenFill,
  PiStepsFill,
  PiCreditCardFill,
  PiStackFill,
  PiTableFill,
  PiBrowserFill,
  PiBoundingBoxFill,
  PiHourglassSimpleFill,
  PiUserCircleFill,
  PiShootingStarFill,
  PiRocketLaunchFill,
  PiFolderLockFill,
  PiBinocularsFill,
  PiHammerFill,
  PiNoteBlankFill,
  PiUserPlusFill,
  PiShieldCheckFill,
  PiLockKeyFill,
  PiChatCenteredDotsFill,
  PiMagicWandFill,
  PiCalendarPlusFill,
  PiMagicWandDuotone,
} from "react-icons/pi";

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
];

export default MenuItems;
