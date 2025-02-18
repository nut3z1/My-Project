import type { FC, SVGProps } from "react";

import Icon from "../../../public/avatar.svg";

export const AvatarIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <Icon {...props} />
);
