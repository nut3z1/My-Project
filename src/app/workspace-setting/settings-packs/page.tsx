import { SettingsList } from "@/modules/workspace-setting/settings-list";
import React from "react";

export default function SettingsPacks() {
  return (
    <div>
      <div className="font-semibold text-xl mb-2">All setting packs</div>
      <div className="text-xs font-normal">
        Combine task types, fields, status, labels, automation together to
        quickly update multiple project.
      </div>
      <SettingsList />
    </div>
  );
}
