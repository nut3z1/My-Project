import type { FC, SVGProps } from "react";

import Icon from "../../../public/favicon.svg";

export const FaviconIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <Icon {...props} />
);
