"use client";
import { Dots } from "@/components/Icons";
import { modalCustom } from "@/components/Modal";
import { CaseSetting, FormSettingValue, Type } from "@/types";
import { PoweroffOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Tooltip } from "antd";
import { settingItem } from "./setting-item";
import { ModalContent } from "./setting-modal-content";
import { useEffect, useState } from "react";

export const STORAGE_KEY = "listSetting";

export const SettingsList = () => {
  const listSetting: FormSettingValue[] = [
    {
      title: "Product development",
      content: "Use this pack for product development process.",
      assign: ["Leanbase"],
      items: {
        check: 4,
        round: 8,
        tag: 13,
        lightning: 3,
      },
    },
    {
      title: "Approval & Feedback demo",
      content: "Use this pack for product development process.",
      items: {
        check: 4,
        round: 8,
        tag: 13,
        lightning: 3,
      },
    },
    {
      title: "Approval & Feedback demo",
      content: "Use this pack for product development process.",
      assign: ["Bamboo", "PrinBase", "Front-Build", "Dpro", "Graphic design"],
      items: {
        check: 4,
        round: 8,
        tag: 13,
        lightning: 3,
      },
    },
  ];
  const [dataSetting, setDataSetting] = useState<FormSettingValue[]>([]);

  const items: MenuProps["items"] = [
    {
      label: (
        <a
          href="https://www.antgroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  const createSetting = () => {
    modalCustom({
      title: "Create Setting",
      content: (
        <ModalContent type={Type.CREATE} setDataSetting={setDataSetting} />
      ),
    });
  };

  useEffect(() => {
    const storedSettings = localStorage.getItem(STORAGE_KEY);
    if (storedSettings) {
      setDataSetting(JSON.parse(storedSettings));
    } else {
      setDataSetting(listSetting);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(listSetting));
    }
  }, []);

  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 gap-6">
        <div>
          <Button
            className="w-full h-40 bg-[#F4F4F5]"
            icon={<PoweroffOutlined />}
            onClick={createSetting}
          >
            Create pack
          </Button>
        </div>
        {dataSetting.map((item) => (
          <div
            key={item.title}
            className="px-4 pt-4 pb-1 border border-[#A1A1AA3D] border-solid rounded-lg"
          >
            <div className="border-b border-[#A1A1AA3D] border-solid pb-5">
              <div className="text-[#3F3F46] font-semibold text-sm leading-5	mb-1">
                {item.title}
              </div>
              <div className="text-[#71717A] text-xs leading-4 mb-3">
                {item.content}
              </div>
              <div>
                <ul className="flex items-center gap-1.5">
                  {Object.entries(item.items)?.map(([key, value]) => (
                    <li key={key}>
                      {settingItem({
                        caseSetting: key as CaseSetting,
                        value: value,
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-between py-4">
              <div>
                Assign to board:{" "}
                <Tooltip
                  title={item.assign?.join(", ") ?? "None"}
                  placement="bottom"
                >
                  <span>
                    {" "}
                    {item.assign?.length
                      ? item.assign?.length > 2
                        ? `${item.assign?.slice(0, 2).join(", ")}, ... (+${
                            item.assign?.length - 2
                          })`
                        : item.assign.join(", ")
                      : "None"}
                  </span>
                </Tooltip>
              </div>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <div className="flex items-center hover:bg-[#0000000f] rounded-lg p-2 h-8">
                  <div onClick={(e) => e.preventDefault()}>
                    <Dots />
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
