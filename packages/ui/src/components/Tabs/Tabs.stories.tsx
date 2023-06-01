import React from "react";
import { Meta } from "@storybook/react";
import Tabs from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Atoms/Tabs",
};
export default meta;

const items = ["Overview", "Integrations", "Activity", "Domains", "Usage", "Monitoring"];

export const Default = () => {
  const [value, setValue] = React.useState(items[0]);

  return (
    <Tabs.Root>
      {items.map((item) => (
        <Tabs.Item key={item} selected={value === item} onClick={() => setValue(item)}>
          {item}
        </Tabs.Item>
      ))}
    </Tabs.Root>
  );
};
