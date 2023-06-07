import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface Props {
  children: React.ReactNode;
  triggerEl: React.ReactNode;
}

const Root: React.FC<Props> = ({ children, triggerEl }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{triggerEl}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>{children}</DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

interface ContentProps {
  className?: string;
  children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ className, children }) => {
  return (
    <DropdownMenu.Content className={`rounded-md shadow-md ${className}`} sideOffset={10}>
      {children}
    </DropdownMenu.Content>
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
  Content,
};
