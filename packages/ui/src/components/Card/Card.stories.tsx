import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default = () => <Card />;
