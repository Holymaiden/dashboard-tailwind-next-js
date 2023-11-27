"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import clsxm from "@/common/libs/clsxm";
import { useDirection } from "@/common/hooks/use-direction";
import { FaCog } from "react-icons/fa";
import { ActionIcon } from "rizzui";
import { DrawerHeader } from "@/common/components/settings/settings-drawer";
import { usePresets } from "@/config/color-presets";
import {
  useApplyColorPreset,
  useColorPresets,
} from "@/common/hooks/use-theme-color";
import { useDrawer } from "@/common/hooks/use-drawer";
const SettingsDrawer = dynamic(
  () => import("@/common/components/settings/settings-drawer"),
  {
    ssr: false,
  }
);

export default function SettingsButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const COLOR_PRESETS = usePresets();
  const { openDrawer, closeDrawer } = useDrawer();
  const { direction } = useDirection();
  const { colorPresets } = useColorPresets();

  // to apply color preset value in css variable
  useApplyColorPreset<any>(colorPresets ?? COLOR_PRESETS[0].colors);

  // to set html dir attribute on direction change
  useEffect(() => {
    document.documentElement.dir = direction ?? "ltr";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <ActionIcon
      aria-label="Settings"
      variant="text"
      className={clsxm(
        "relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9",
        className
      )}
      onClick={() =>
        openDrawer({
          view: (
            <>
              <DrawerHeader onClose={closeDrawer} />
              <SettingsDrawer />
            </>
          ),
          placement: "right",
          customSize: "420px",
        })
      }
    >
      {children ? (
        children
      ) : (
        <FaCog
          strokeWidth={1.8}
          className="h-[22px] w-auto animate-spin-slow"
        />
      )}
    </ActionIcon>
  );
}
