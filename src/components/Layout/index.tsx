"use client";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const { Sider, Content } = Layout;

export function LayoutMaster({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: "search",
      icon: <UserOutlined />,
      label: <Link href="/search">Search</Link>,
    },
    {
      key: "/",
      icon: <VideoCameraOutlined />,
      label: <Link href="/">Home</Link>,
    },
    {
      key: "tasks",
      icon: <UploadOutlined />,
      label: <Link href="/tasks">Tasks</Link>,
    },
    {
      key: "boards",
      icon: <UploadOutlined />,
      label: <Link href="/boards">Boards</Link>,
    },
    {
      key: "workspace-setting",
      icon: <UploadOutlined />,
      label: "Workspace Setting",
      children: [
        {
          key: "1",
          label: <Link href="/workspace-setting/general">General</Link>,
        },
        {
          key: "2",
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
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="h-[100vh]"
          theme="light"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[`${pathname?.substring(1)}`]}
            items={items}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
