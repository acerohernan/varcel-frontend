import React from "react";
import { Tabs, Input, Button, Card, Menu } from "@varcel/ui";
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  PlusIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Head from "next/head";

const tabsItems = ["Overview", "Integrations", "Activity", "Domains", "Usage", "Monitoring", "Storage", "Settings"];

const Divisor = () => <div className="w-full h-1 border-b border-border_gray mt-2 mb-3" />;

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
    <>
      <Head>
        <title>Dashboard - Varcel</title>
      </Head>
      <section>
        <div className="bg-white w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 py-[9px] pl-5">
              <Link href="/dashboard">
                <img alt="vercel logo" src="./triangle-vercel.svg" width={30} height={30} className="m-2" />
              </Link>
              <div className="w-2 h-[25px] border-l rotate-[30deg] border-border_gray" />
              <div className="flex gap-2 items-center">
                <img
                  className="rounded-full object-cover"
                  alt="avatar"
                  src="/images/avatar-placeholder.svg"
                  width={30}
                  height={30}
                />
                <span className="text-base font-base">acerohernan</span>
                <div className="rounded-xl font-base  bg-border_gray text-[12px] text-gray-400 px-2 py-[1px] hidden lg:block">
                  Hobby
                </div>
                <button className="px-1 py-2 hover:bg-black/5 rounded-md">
                  <ChevronUpDownIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="hidden md:flex gap-5 items-center pr-5">
              <Button variant="outlined">Feedback</Button>
              <Link className="text-base cursor-pointer text-gray-400 hover:text-black" href="/">
                Changelog
              </Link>
              <Link className="text-base cursor-pointer text-gray-400 hover:text-black" href="/">
                Help
              </Link>
              <Link className="text-base cursor-pointer text-gray-400 hover:text-black" href="/">
                Docs
              </Link>
              <Menu.Root
                triggerEl={
                  <button type="button">
                    <img
                      className="w-7 h-7 rounded-full object-cover"
                      alt="avatar"
                      src="/images/avatar-placeholder.svg"
                    />
                  </button>
                }
              >
                <Menu.Content className="bg-white p-2 mr-10">
                  <div className="hidden md:block px-3 py-1">
                    <span className="text-gray-400 text-base p-2 block">contacto.acero.hernan@gmail.com</span>
                    <Menu.Item>Dashboard</Menu.Item>
                    <Menu.Item>Settings</Menu.Item>
                    <Menu.Item>
                      <div className="flex items-center justify-between">
                        New Team
                        <PlusIcon className="w-5 h-5" />
                      </div>
                    </Menu.Item>
                    <Divisor />
                    <Menu.Item>
                      <div className="flex items-center justify-between">
                        Command Menu
                        <ComputerDesktopIcon className="w-5 h-5" />
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <div className="flex items-center justify-between">
                        Theme
                        <MoonIcon className="w-5 h-5" />
                      </div>
                    </Menu.Item>
                    <Divisor />
                    <Menu.Item>
                      <div className="flex items-center justify-between">
                        Varcel Homepage
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </div>
                    </Menu.Item>
                    <Menu.Item>Logout</Menu.Item>
                    <Divisor />
                    <Button full>Upgrade to Pro</Button>
                  </div>
                </Menu.Content>
              </Menu.Root>
            </div>
          </div>
          <div className="px-3">
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

            <Menu.Root
              triggerEl={
                <Button layout="icon">
                  <PlusIcon className="w-5 h-5 md:hidden" />
                  <div className="hidden md:flex items-center justify-between w-[110px] px-1">
                    <span className="block">Add New...</span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </Button>
              }
            >
              <Menu.Content className="bg-white p-2 mr-10 md:mr-0">
                <Menu.Item>
                  <span className="w-[95px] block">Project</span>
                </Menu.Item>
                <Menu.Item>Domain</Menu.Item>
                <Menu.Item>Storage</Menu.Item>
                <Menu.Item>Team</Menu.Item>
              </Menu.Content>
            </Menu.Root>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array(11)
              .fill(0)
              .map((item, index) => {
                return <Card key={`item-${index}-${item}`} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
