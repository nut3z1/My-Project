"use client";
import { PropsWithChildren } from "react";
import { Tabs } from "antd";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = (props: PropsWithChildren) => {
  const pathname = usePathname();

  const items = [
    {
      key: "workspace-setting/general",
      label: <Link href="/workspace-setting/general">General</Link>,
      icon: <AppleOutlined />,
    },
    {
      key: "workspace-setting/settings-packs",
      label: (
        <Link href="/workspace-setting/settings-packs">Settings Packs</Link>
      ),
      icon: <AndroidOutlined />,
    },
  ];

  return (
    <div>
      <div className="font-medium text-base py-5">Workspace Setting</div>
      <div>
        <Tabs defaultActiveKey={`${pathname?.substring(1)}`} items={items} />
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
