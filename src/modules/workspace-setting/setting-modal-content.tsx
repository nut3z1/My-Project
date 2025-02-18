import { CheckboxSmall, Lightning, Status, Tag } from "@/components/Icons";
import { optionsSetting } from "@/mock";
import { FormSettingValue, Type } from "@/types";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Modal } from "antd";

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
  data,
  dataSetting,
  setDataSetting,
}: {
  type: Type;
  dataSetting?: FormSettingValue[];
  data?: FormSettingValue;
  setDataSetting: Dispatch<SetStateAction<FormSettingValue[]>>;
}) => {
  const onFinish = (values: FormSettingValue) => {
    if (type === Type.CREATE) {
      setDataSetting((pre) => [values, ...pre]);
    }
    if (type === Type.EDIT || type === Type.ASSIGN) {
      const item = dataSetting?.map((item) =>
        item.id === data?.id ? { ...item, ...values } : item
      );
      if (item) {
        setDataSetting(item);
      }
    }
    Modal.destroyAll();
  };

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      title: data?.title,
      content: data?.content,
      assign: data?.assign,
      items: {
        check: data?.items?.check || null,
        round: data?.items?.round || null,
        tag: data?.items?.tag || null,
        lightning: data?.items?.lightning || null,
      },
    });
  }, []);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      validateMessages={validateMessages}
      labelCol={{ span: 2 }}
      labelAlign={"left"}
    >
      <div className="pt-4">
        {type !== Type.ASSIGN ? (
          <>
            <Form.Item
              name={"title"}
              label="Title"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={"content"} label="Content" className="232R">
              <Input.TextArea />
            </Form.Item>
            <div className="grid grid-cols-2 gap-6">
              <Form.Item
                name={["items", "check"]}
                label={<CheckboxSmall />}
                rules={[{ type: "number", min: 0, max: 99 }]}
              >
                <InputNumber className="w-full" />
              </Form.Item>
              <Form.Item
                name={["items", "round"]}
                label={<Status />}
                rules={[{ type: "number", min: 0, max: 99 }]}
              >
                <InputNumber className="w-full" />
              </Form.Item>
              <Form.Item
                name={["items", "tag"]}
                label={<Tag />}
                rules={[{ type: "number", min: 0, max: 99 }]}
              >
                <InputNumber className="w-full" />
              </Form.Item>
              <Form.Item
                name={["items", "lightning"]}
                label={<Lightning />}
                rules={[{ type: "number", min: 0, max: 99 }]}
              >
                <InputNumber className="w-full" />
              </Form.Item>
            </div>
          </>
        ) : null}
        <Form.Item name={"assign"} label="Assign">
          <Select options={optionsSetting} mode="multiple" />
        </Form.Item>
        <div className="flex items-center gap-4 justify-end pt-2 pb-4">
          <Button onClick={() => Modal.destroyAll()}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
};
