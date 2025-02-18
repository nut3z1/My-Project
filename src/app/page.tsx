import { Title } from "@/components/Title";
import { Empty } from "antd";

export default function Home() {
  return (
    <div>
      <Title title="Home" />
      <div className="h-[80vh] flex justify-center items-center">
        <Empty description="Coming Soon" />
      </div>
    </div>
  );
}
