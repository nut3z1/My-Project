import { Title } from "@/components/Title";
import { Empty } from "antd";
import React from "react";

export default function Tasks() {
  return (
    <div>
      <Title title="Tasks" />
      <div className="h-[80vh] flex justify-center items-center">
        <Empty description="Coming Soon" />
      </div>
    </div>
  );
}
