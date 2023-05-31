import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Controllers/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Browse Marketplace",
  },
};

export const Outlined: Story = {
  args: {
    children: "Browse Marketplace",
    variant: "outlined",
  },
};
