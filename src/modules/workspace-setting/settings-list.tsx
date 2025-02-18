"use client";
import {
  Dots,
  PencilSquareIcon,
  PlusIcon,
  SquaresIcon,
  TrashIcon,
} from "@/components/Icons";
import { modalCustom } from "@/components/Modal";
import { CaseSetting, FormSettingValue, Type } from "@/types";
import { Button, Dropdown, MenuProps, Tooltip } from "antd";
import { settingItem } from "./setting-item";
import { ModalContent } from "./setting-modal-content";
import { useState } from "react";
import { listSetting } from "@/mock";

export const STORAGE_KEY = "listSetting";

export const SettingsList = () => {
  const [dataSetting, setDataSetting] =
    useState<FormSettingValue[]>(listSetting);

  const createSetting = () => {
    modalCustom({
      title: "Create Setting",
      content: (
        <ModalContent type={Type.CREATE} setDataSetting={setDataSetting} />
      ),
    });
  };

  const editSetting = (data: FormSettingValue) => {
    modalCustom({
      title: "Edit Setting",
      content: (
        <ModalContent
          type={Type.EDIT}
          data={data}
          dataSetting={dataSetting}
          setDataSetting={setDataSetting}
        />
      ),
    });
  };

  const assignSetting = (data: FormSettingValue) => {
    modalCustom({
      title: "Assign Setting",
      content: (
        <ModalContent
          type={Type.ASSIGN}
          data={data}
          dataSetting={dataSetting}
          setDataSetting={setDataSetting}
        />
      ),
    });
  };

  const deleteSetting = (data: FormSettingValue) => {
    const values = dataSetting?.filter((item) => item.id !== data.id);
    setDataSetting(values);
  };

  // useEffect(() => {
  //   const storedSettings = localStorage.getItem(STORAGE_KEY);
  //   if (storedSettings) {
  //     setDataSetting(JSON.parse(storedSettings));
  //   } else {
  //     setDataSetting(listSetting);
  //     localStorage.setItem(STORAGE_KEY, JSON.stringify(listSetting));
  //   }
  // }, []);

  const items: MenuProps["items"] = [
    {
      label: <div className="p-1.5 w-28">Edit</div>,
      key: Type.EDIT,
      icon: <PencilSquareIcon />,
    },
    {
      label: <div className="p-1.5 w-28">Assign</div>,
      key: Type.ASSIGN,
      icon: <SquaresIcon />,
    },
    {
      type: "divider",
    },
    {
      label: <div className="p-1.5 w-28">Delete</div>,
      key: Type.DELETE,
      icon: <TrashIcon />,
    },
  ];

  const handleMenuClick = (e: { key: Type }, item: FormSettingValue) => {
    switch (e.key) {
      case Type.EDIT:
        editSetting(item);
        break;
      case Type.DELETE:
        deleteSetting(item);
        break;
      case Type.ASSIGN:
        assignSetting(item);
        break;
      default:
        break;
    }
  };

  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 gap-6">
        <div>
          <Button
            className="w-full h-full bg-[#F4F4F5]"
            icon={<PlusIcon />}
            onClick={createSetting}
          >
            Create pack
          </Button>
        </div>
        {dataSetting.map((item) => (
          <div
            key={item.id}
            className="px-4 pt-4 border border-[#A1A1AA3D] border-solid rounded-lg"
          >
            <div className="border-b border-[#A1A1AA3D] border-solid pb-5 ">
              <div className="text-[#3F3F46] font-semibold text-sm leading-5	mb-1">
                {item.title}
              </div>
              <div className="text-[#71717A] text-xs leading-4 mb-3 line-clamp-2">
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
            <div className="flex items-center justify-between pt-2 pb-3">
              <div className="text-xs font-medium text-[#71717A]">
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
              <Dropdown
                menu={{
                  items,
                  onClick: (e) => handleMenuClick(e as { key: Type }, item),
                }}
                trigger={["click"]}
                rootClassName="sds"
                openClassName="3232222"
              >
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
