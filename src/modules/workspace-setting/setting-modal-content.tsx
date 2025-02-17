import { CheckboxSmall, Lightning, Status, Tag } from "@/components/Icons";
import { FormSettingValue, Type } from "@/types";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { Dispatch, SetStateAction } from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const ModalContent = ({
  type,
  setDataSetting,
}: {
  type: Type;
  setDataSetting: Dispatch<SetStateAction<FormSettingValue[]>>;
}) => {
  const onFinish = (values: FormSettingValue) => {
    if (type === Type.CREATE) {
      setDataSetting((pre) => [values, ...pre]);
    }
  };

  const optionsSetting = [
    { value: "Bamboo", label: "Bamboo" },
    { value: "PrinBase", label: "PrinBase" },
    { value: "Front-Build", label: "Front-Build" },
    { value: "Dpro", label: "Dpro" },
    { value: "Graphic design", label: "Graphic design" },
    { value: "Leanbase", label: "Leanbase" },
  ];

  return (
    <div>
      {" "}
      <Form {...layout} onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={"title"} label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={"content"} label="Content">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name={["items", "check"]}
          label={<CheckboxSmall />}
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["items", "round"]}
          label={<Status />}
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["items", "tag"]}
          label={<Tag />}
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["items", "lightning"]}
          label={<Lightning />}
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={"assign"} label="Assign">
          <Select options={optionsSetting} mode="multiple" />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
