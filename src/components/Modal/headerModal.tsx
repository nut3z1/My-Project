import React from "react";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export const headerModal = ({ title }: { title?: string }) => {
  return (
    <div className="flex items-center justify-between">
      <div>{title}</div>
      <div className="p-2 hover:bg-[#0000000f] rounded-lg h-8 flex">
        <CloseOutlined
          onClick={() => Modal.destroyAll()}
          className="text-[#000000e0]"
        />
      </div>
    </div>
  );
};
