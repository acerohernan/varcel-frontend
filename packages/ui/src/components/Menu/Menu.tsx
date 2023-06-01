import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "../Button";

const items = ["Project", "Domain", "Storage", "Team"];

interface Props {
  children: React.ReactNode;
  triggerEl: React.ReactNode;
}

const Root: React.FC<Props> = ({ children, triggerEl }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{triggerEl}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="p-2 rounded-md shadow-md" sideOffset={5}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

interface ItemProps {
  children?: React.ReactNode;
}
const Item: React.FC<ItemProps> = ({ children }) => {
  return (
    <DropdownMenu.Item className="p-2 transition-all rounded-md text-base outline-none data-[highlighted]:bg-black/10 cursor-pointer">
      {children}
    </DropdownMenu.Item>
  );
};

export default {
  Root,
  Item,
};
