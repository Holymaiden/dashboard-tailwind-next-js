"use client";

import { useTheme } from "next-themes";
import {
  PiAlignLeft,
  PiAlignRight,
  PiMoon,
  PiSun,
  PiXBold,
} from "react-icons/pi";
import clsxm from "@/common/libs/clsxm";
import { Title, Button, ActionIcon, RadioGroup, AdvancedRadio } from "rizzui";
import { siteConfig } from "@/config/site.config";
import { updateThemeColor } from "@/common/utils/update-theme-color";
import { presetDark, presetLight, usePresets } from "@/config/color-presets";
import { useEffect } from "react";
import SimpleBar from "@/common/components/SimpleBar";
import { useLayout } from "@/common/hooks/use-layout";
import { useDirection } from "@/common/hooks/use-direction";
import { LAYOUT_OPTIONS } from "@/config/enums";
import {
  useColorPresetName,
  useColorPresets,
} from "@/common/hooks/use-theme-color";
import HydrogenIcon from "@/common/components/icons/HeliumIcon";
import HeliumIcon from "@/common/components/icons/HeliumIcon";
import LithiumIcon from "@/common/components/icons/LithiumIcon";

function RadioBox({
  value,
  children,
  className,
  ...props
}: React.PropsWithChildren<{ value: string; className?: string }>) {
  return (
    <AdvancedRadio
      value={value}
      color="primary"
      className={clsxm(
        "flex h-16 items-center justify-center rounded border border-gray-200 px-6 py-1.5 text-sm font-medium capitalize text-gray-500 shadow-sm hover:cursor-pointer hover:border-primary peer-checked:border-primary peer-checked:text-gray-900 peer-checked:ring-[0.6px] peer-checked:ring-primary dark:peer-checked:border-primary dark:peer-checked:ring-primary",
        className
      )}
      inputClassName="[&:checked:enabled~span]:ring-1 [&:checked:enabled~span]:ring-offset-0 [&:checked:enabled~span]:ring-primary [&:checked:enabled~span]:border-primary"
      {...props}
    >
      {children}
    </AdvancedRadio>
  );
}

function DrawerBlock({
  title,
  children,
  className,
}: React.PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <div className={clsxm("mb-10 px-0.5", className)}>
      <Title
        as="h6"
        className={clsxm(
          "mb-3 text-sm font-medium tracking-wide text-gray-500"
        )}
      >
        {title}
      </Title>
      {children}
    </div>
  );
}

function ThemeSwitcher({}: any) {
  const { theme, setTheme } = useTheme();
  const { colorPresetName } = useColorPresetName();

  useEffect(() => {
    if (theme === "light" && colorPresetName === "black") {
      updateThemeColor(
        presetLight.lighter,
        presetLight.light,
        presetLight.default,
        presetLight.dark
      );
    }
    if (theme === "dark" && colorPresetName === "black") {
      updateThemeColor(
        presetDark.lighter,
        presetDark.light,
        presetDark.default,
        presetDark.dark
      );
    }
  }, [theme, colorPresetName]);

  return (
    <DrawerBlock title="Mode">
      <RadioGroup
        value={theme ?? siteConfig.mode}
        setValue={(selectedTheme: any) => {
          setTheme(selectedTheme);
        }}
        className="grid grid-cols-2 gap-4"
        color="primary"
      >
        <RadioBox value={"light"}>
          <PiSun className="h-[22px] w-[22px]" />
        </RadioBox>
        <RadioBox value={"dark"}>
          <PiMoon className="h-[22px] w-[22px]" />
        </RadioBox>
      </RadioGroup>
    </DrawerBlock>
  );
}

function LayoutSwitcher() {
  const { layout, setLayout } = useLayout();
  return (
    <DrawerBlock title="Layout">
      <RadioGroup
        value={layout}
        setValue={(selectedLayout: any) => setLayout(selectedLayout)}
        className="grid grid-cols-2 gap-4"
        color="primary"
      >
        <RadioBox
          value={LAYOUT_OPTIONS.HYDROGEN}
          className="flex h-[unset] flex-col justify-center gap-1.5 py-4"
        >
          <HydrogenIcon aria-label="Hydrogen Layout" className="h-auto w-16" />
          Hydrogen
        </RadioBox>
        <RadioBox
          value={LAYOUT_OPTIONS.HELIUM}
          className="flex h-[unset] flex-col justify-center gap-1.5 py-4"
        >
          <HeliumIcon aria-label="Helium Layout" className="h-auto w-16" />
          Helium
        </RadioBox>
        <RadioBox
          value={LAYOUT_OPTIONS.LITHIUM}
          className="flex h-[unset] flex-col justify-center gap-1.5 py-4"
        >
          <LithiumIcon aria-label="Lithium Layout" className="h-auto w-16" />
          Lithium
        </RadioBox>
      </RadioGroup>
    </DrawerBlock>
  );
}

function AppDirection() {
  const { direction, setDirection } = useDirection();
  return (
    <DrawerBlock title="Direction">
      <RadioGroup
        value={direction ?? "ltr"}
        // @ts-ignore
        setValue={setDirection}
        className="grid grid-cols-2 gap-4"
        color="primary"
      >
        <RadioBox value={"ltr"} className=" h-20 py-4">
          <PiAlignLeft className="me-1 h-auto w-6" />
          LTR
        </RadioBox>
        <RadioBox value={"rtl"} className=" h-20 py-4">
          <PiAlignRight className="me-1 h-auto w-6" />
          RTL
        </RadioBox>
      </RadioGroup>
    </DrawerBlock>
  );
}

function ColorOptions() {
  const COLOR_PRESETS = usePresets();
  const { setColorPresets } = useColorPresets();
  const { colorPresetName, setColorPresetName } = useColorPresetName();

  return (
    <DrawerBlock title="Colors">
      <div className="grid grid-cols-2 gap-4">
        {COLOR_PRESETS.map((preset) => (
          <button
            key={preset?.name}
            title={preset?.name}
            onClick={() => {
              setColorPresets(preset?.colors);
              setColorPresetName(preset?.name.toLowerCase());
            }}
            className={clsxm(
              "grid h-auto place-content-center gap-2 rounded border border-gray-200 py-4 shadow-sm transition duration-300 focus-visible:outline-none",
              colorPresetName?.toLowerCase() === preset?.name?.toLowerCase()
                ? "ring-2 ring-primary ring-offset-0"
                : "hover:border-primary"
            )}
          >
            <span
              style={{ backgroundColor: preset.colors.default }}
              className="h-6 w-6 rounded-full"
            />
          </button>
        ))}
      </div>
    </DrawerBlock>
  );
}

export function DrawerHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3.5">
      <Title as="h5" className={clsxm("font-semibold")}>
        Settings
      </Title>
      <ActionIcon
        variant="outline"
        onClick={onClose}
        className={clsxm("border-0 p-0")}
      >
        <PiXBold className="h-5 w-5" />
      </ActionIcon>
    </div>
  );
}

export default function SettingsDrawer() {
  const { theme } = useTheme();
  const { colorPresetName } = useColorPresetName();

  return (
    <>
      <SimpleBar className="h-[calc(100%-130px)]">
        <div className="px-5 py-6">
          <ThemeSwitcher />
          <LayoutSwitcher />
          <AppDirection />
          <ColorOptions />
        </div>
      </SimpleBar>
      <a
        href="https://fihaa.my.id"
        target="_blank"
        className="grid grid-cols-1 px-6"
      >
        <Button
          size="lg"
          tag="span"
          color="primary"
          className={clsxm(
            "font-lexend text-sm font-medium uppercase",
            theme === "dark" &&
              colorPresetName === "black" &&
              "dark:text-gray-0"
          )}
        >
          <span className="">Documentation</span>
        </Button>
      </a>
    </>
  );
}
