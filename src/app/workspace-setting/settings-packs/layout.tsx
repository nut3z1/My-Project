import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren<{ params: { id: string } }>) => {
  return <div>{props.children}</div>;
};

export default Layout;
