"use client";
<<<<<<< HEAD

=======
>>>>>>> v-2
import { Plus } from "lucide-react";
import ActionTooltip from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

<<<<<<< HEAD
export const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button
          onClick={() => onOpen("createServer")}
          className="group flex items-center"
        >
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus
              className="group-hover:text-white transition text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
=======
const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <ActionTooltip label="Add a server" align="center" side="right">
      <button
        className="group flex items-center"
        onClick={() => onOpen("createServer")}
      >
        <div className=" h-11 w-11 flex items-center justify-center bg-background rounded-[24px] group-hover:bg-emerald-500 group-hover:rounded-[16px] transition-all delay-100 overflow-hidden">
          <Plus size={25} />
        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationAction;
>>>>>>> v-2
