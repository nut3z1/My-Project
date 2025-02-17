export enum Type {
  EDIT = "edit",
  CREATE = "create",
  DELETE = "delete",
}

export const enum CaseSetting {
  CHECK = "check",
  ROUND = "round",
  TAG = "tag",
  LIGHTNING = "lightning",
}

export interface FormSettingValue {
  title: string;
  content?: string;
  items: {
    check?: number;
    round?: number;
    tag?: number;
    lightning?: number;
  };
  assign?: string[];
}
