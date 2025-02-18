import { FormSettingValue } from "@/types";

export const listSetting: FormSettingValue[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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

export const optionsSetting = [
  { value: "Bamboo", label: "Bamboo" },
  { value: "PrinBase", label: "PrinBase" },
  { value: "Front-Build", label: "Front-Build" },
  { value: "Dpro", label: "Dpro" },
  { value: "Graphic design", label: "Graphic design" },
  { value: "Leanbase", label: "Leanbase" },
];
