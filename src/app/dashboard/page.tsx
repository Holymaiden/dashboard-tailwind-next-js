import { Metadata, NextPage } from "next";
import Dashboard from "@/modules/dashboard";
import { metaObject } from "@/config/site.config";

export const metadata: Metadata = {
  ...metaObject("E-Commerce"),
};

const DashboardPage: NextPage = () => {
  return <Dashboard />;
};

export default DashboardPage;
