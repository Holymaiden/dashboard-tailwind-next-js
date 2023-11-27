"use client";
import { LAYOUT_OPTIONS } from "@/config/enums";
import { useLayout } from "@/common/hooks/use-layout";
import HydrogenLayout from "@/common/layout/dashboard/hydrogen/Layout";
import HeliumLayout from "@/common/layout/dashboard/helium/Layout";
import LithiumLayout from "@/common/layout/dashboard/lithium/Layout";

import { useIsMounted } from "@/common/hooks/use-is-mounted";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { layout } = useLayout();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  if (layout === LAYOUT_OPTIONS.HELIUM) {
    return <HeliumLayout>{children}</HeliumLayout>;
  }
  if (layout === LAYOUT_OPTIONS.LITHIUM) {
    return <LithiumLayout>{children}</LithiumLayout>;
  }

  return <HydrogenLayout>{children}</HydrogenLayout>;
}
