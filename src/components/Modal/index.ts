"use client";
import { Modal } from "antd";
import React from "react";
const { confirm } = Modal;
import { headerModal } from "./headerModal";

export const modalCustom = ({
  title,
  content,
  width,
}: {
  width?: string;
  title: string;
  content?: React.ReactNode;
}) => {
  confirm({
    title: headerModal({ title }),
    content: content,
    icon: null,
    okText: "Xác nhận",
    cancelText: "Hủy",
    width: width ?? 800,
    centered: true,
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
