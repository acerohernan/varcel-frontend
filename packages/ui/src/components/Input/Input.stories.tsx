import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default = () => <Input />;
