import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    leftIcon: (
      <div className="pl-3 flex items-center justify-center">
        <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
      </div>
    ),

    placeholder: "Search...",
  },
};

export const Error: Story = {
  args: {
    leftIcon: (
      <div className="pl-3 flex items-center justify-center">
        <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
      </div>
    ),
    value: "Something wrong",
    errorMsg: "Please add a valid term",
  },
};

export const Working = () => {
  const [value, setValue] = React.useState<string>("");

  const inputRef = React.useRef<HTMLInputElement>(null);

  function resetValue() {
    setValue("");
    inputRef.current?.focus();
  }

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div>
      <Input
        value={value}
        onChange={onInputChange}
        placeholder="Search..."
        ref={inputRef}
        leftIcon={
          <div className="pl-3 flex items-center justify-center">
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
          </div>
        }
        rightIcon={
          value === "" ? null : (
            <button className="group pr-3" onClick={resetValue}>
              <XCircleIcon className="w-6 h-6 text-gray-400 group-hover:text-black" />
            </button>
          )
        }
      />
    </div>
  );
};
