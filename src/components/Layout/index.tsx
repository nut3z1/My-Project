"use client";
import { Button, Layout, Menu, theme, Tooltip } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AvatarIcon,
  BellIcon,
  CheckboxIcon,
  ChevronDownIcon,
  CogTooth,
  EllipsisVertical,
  FaviconIcon,
  HomeIcon,
  MenuSrcollIcon,
  QuestionMarkCircle,
  SearchIcon,
  SquaresIcon,
} from "../Icons";
import { MenuFoldOutlined } from "@ant-design/icons";
const { Sider, Content } = Layout;

export function LayoutMaster({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      key: "search",
      icon: <SearchIcon />,
      label: <Link href="/search">Search</Link>,
    },
    {
      key: "/",
      icon: <HomeIcon />,
      label: <Link href="/">Home</Link>,
    },
    {
      key: "tasks",
      icon: <CheckboxIcon />,
      label: <Link href="/tasks">Tasks</Link>,
    },
    {
      key: "boards",
      icon: <SquaresIcon />,
      label: <Link href="/boards">Boards</Link>,
    },
    {
      key: "workspace-setting",
      icon: <CogTooth />,
      label: "Workspace Setting",
      children: [
        {
          key: "workspace-setting/general",
          label: <Link href="/workspace-setting/general">General</Link>,
        },
        {
          key: "workspace-setting/settings-packs",
          label: (
            <Link href="/workspace-setting/settings-packs">Settings Packs</Link>
          ),
        },
      ],
    },
  ];

  const pathname = usePathname();
  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width={230}>
          <div className="grid border-r border-solid h-[100vh] border-[#E4E4E7] bg-[#F4F4F5]">
            <div>
              <div
                className={`flex items-center justify-between h-[42px] mb-4 ${
                  collapsed ? "pl-[18px]" : "pl-[20px]"
                } pr-3 pt-3.5`}
              >
                {!collapsed && (
                  <Tooltip title="Coming Soon">
                    <div className="flex items-center gap-1.5">
                      <FaviconIcon />
                      <span className="text-sm font-medium text-[#3F3F46]">
                        LeanBase
                      </span>
                      <ChevronDownIcon />
                    </div>
                  </Tooltip>
                )}
                <Button
                  type="text"
                  icon={collapsed ? <MenuFoldOutlined /> : <MenuSrcollIcon />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 28,
                    height: 28,
                  }}
                />
              </div>
              <Menu
                mode="inline"
                defaultSelectedKeys={[`${pathname?.substring(1)}`]}
                items={items}
                className={`!border-0 bg-transparent ${
                  collapsed ? "!w-20" : ""
                }`}
              />
            </div>
            <div className="self-end p-3 ">
              <div className={`flex items-center gap-2 py-1.5 px-2`}>
                <QuestionMarkCircle />
                {!collapsed && <span className="text-sm">Help & Support</span>}
              </div>
              <div className="flex items-center gap-2 py-1.5 px-2 mt-2">
                <BellIcon />
                {!collapsed && <span className="text-sm">Notifications</span>}
              </div>
              <div className="flex items-center justify-between gap-2 pt-3.5 pb-1.5 px-2 border-t border-solid border-[#E4E4E7] mt-2">
                <div className="flex items-center gap-2">
                  <AvatarIcon />
                  {!collapsed && <span className="text-sm">Nam Pham</span>}
                </div>
                {!collapsed && (
                  <Tooltip title="Coming Soon">
                    <EllipsisVertical />
                  </Tooltip>
                )}
              </div>
            </div>
          </div>
        </Sider>
        <Layout>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
