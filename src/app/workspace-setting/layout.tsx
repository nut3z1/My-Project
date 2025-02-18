"use client";
import { PropsWithChildren } from "react";
import { Tabs } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SettingIcon, SettingPack } from "@/components/Icons";

const Layout = (props: PropsWithChildren) => {
  const pathname = usePathname();

  const items = [
    {
      key: "workspace-setting/general",
      label: (
        <div className="flex items-center gap-2">
          <SettingIcon />
          <Link href="/workspace-setting/general">General</Link>
        </div>
      ),
    },
    {
      key: "workspace-setting/settings-packs",
      label: (
        <div className="flex items-center gap-2">
          <SettingPack />
          <Link href="/workspace-setting/settings-packs">Settings Packs</Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="font-medium text-base py-5">Workspace Setting</div>
      <div>
        <Tabs
          defaultActiveKey={`${pathname?.substring(1)}`}
          items={items}
          className="3232"
        />
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
