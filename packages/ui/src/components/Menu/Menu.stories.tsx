import React from "react";
import { Meta } from "@storybook/react";
import Menu from "./Menu";
import { ChevronDownIcon, ExternalLinkIcon, LaptopIcon, MoonIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../Button";

const meta: Meta = { title: "Atoms/Menu" };

export default meta;

export const Default = () => {
  return (
    <Menu.Root
      triggerEl={
        <Button layout="icon">
          <ChevronDownIcon />
        </Button>
      }
    >
      <Menu.Content className="bg-white p-2">
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Domain</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  );
};

const Divisor = () => <div className="w-full h-1 border-b border-border_gray mt-2 mb-3" />;

export const AvatarMenu = () => {
  return (
    <Menu.Root
      triggerEl={
        <button type="button">
          <img
            className="w-8 h-8 rounded-full object-cover"
            alt="avatar"
            src="https://vercel.com/api/www/avatar/0Et9ua7NbSpfga08HSlUpfTF?&s=60"
          />
        </button>
      }
    >
      <Menu.Content className="bg-white p-2">
        <div className="px-3 py-1">
          <span className="text-gray-400 text-base p-2 block">contacto.acero.hernan@gmail.com</span>
          <Menu.Item>Dashboard</Menu.Item>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>
            <div className="flex items-center justify-between">
              New Team
              <PlusIcon />
            </div>
          </Menu.Item>
          <Divisor />
          <Menu.Item>
            <div className="flex items-center justify-between">
              Command Menu
              <LaptopIcon />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="flex items-center justify-between">
              Theme
              <MoonIcon />
            </div>
          </Menu.Item>
          <Divisor />
          <Menu.Item>
            <div className="flex items-center justify-between">
              Vercel Homepage
              <ExternalLinkIcon />
            </div>
          </Menu.Item>
          <Menu.Item>Logout</Menu.Item>
          <Divisor />
          <Button full>Upgrade to Pro</Button>
        </div>
      </Menu.Content>
    </Menu.Root>
  );
};
