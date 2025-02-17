import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren<{ params: { id: string } }>) => {
  console.log("props", props);
  return (
    <div>
      <div className="font-medium text-base">Workspace Setting</div>
      {props.children}
    </div>
  );
};

export default Layout;
