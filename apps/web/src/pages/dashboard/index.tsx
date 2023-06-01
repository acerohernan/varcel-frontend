import React from "react";
import { Tabs, Input, Button, Card } from "@varcel/ui";
import { MagnifyingGlassIcon, PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";

const tabsItems = ["Overview", "Integrations", "Activity", "Domains", "Analytics"];

const DashboardPage = () => {
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
    <section>
      <div className="bg-white w-full">
        <div className="h-[64px]" />
        <div className="pl-3">
          <Tabs.Root>
            {tabsItems.map((item, index) => (
              <Tabs.Item key={item} selected={index === 0}>
                {item}
              </Tabs.Item>
            ))}
          </Tabs.Root>
        </div>
      </div>
      <div className="p-6 max-w-[1248px] mx-auto">
        <div className="flex gap-1">
          <Input
            value={value}
            onChange={onInputChange}
            placeholder="Search..."
            ref={inputRef}
            full
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
          <Button layout="icon">
            <PlusIcon className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array(8)
            .fill(0)
            .map((item, index) => {
              return <Card key={`item-${index}-${item}`} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
