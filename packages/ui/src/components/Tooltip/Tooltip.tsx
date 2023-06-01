import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

interface Props {
  children?: React.ReactNode;
  content?: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({ children, content }) => {
  return (
    <RadixTooltip.Provider delayDuration={200}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className="bg-white shadow-md rounded-md" sideOffset={5} side="top">
            {content}
            <RadixTooltip.Arrow className="fill-white" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
