import { CheckboxSmall, Lightning, Status, Tag } from "@/components/Icons";
import { CaseSetting } from "@/types";

export const settingItem = ({
  caseSetting,
  value,
}: {
  caseSetting: CaseSetting;
  value?: number;
}) => {
  switch (caseSetting) {
    case CaseSetting.CHECK:
      return (
        <div className="flex items-center gap-1 bg-[#EFF6FF] rounded-md p-0.5 pr-1.5">
          <div>
            <CheckboxSmall />
          </div>
          <div className="text-[#3B82F6]">{value}</div>
        </div>
      );
    case CaseSetting.ROUND:
      return (
        <div className="flex items-center gap-1 bg-[#FEFCE8] rounded-md p-0.5 pr-1.5">
          <div>
            <Status />
          </div>
          <div className="text-[#EAB308]">{value}</div>
        </div>
      );
    case CaseSetting.TAG:
      return (
        <div className="flex items-center gap-1 bg-[#EFFDF5] rounded-md p-0.5 pr-1.5">
          <div>
            <Tag />
          </div>
          <div className="text-[#00C16A]">{value}</div>
        </div>
      );
    case CaseSetting.LIGHTNING:
      return (
        <div className="flex items-center gap-1 bg-[#FFF7ED] rounded-md p-0.5 pr-1.5">
          <div>
            <Lightning />
          </div>
          <div className="text-[#F97316]">{value}</div>
        </div>
      );
    default:
      return null;
  }
};
