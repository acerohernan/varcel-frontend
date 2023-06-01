import React from "react";
import { Meta } from "@storybook/react";
import Tooltip from "./Tooltip";
import { PresentationChartLineIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Tooltip> = {
  title: "Atoms/Tooltip",
};
export default meta;

export const Default = () => (
  <div className="flex w-full h-screen items-center justify-center">
    <Tooltip
      content={
        <div className="text-base text-center p-3">
          Enable Speed Insights for greater
          <span className="block">performance insights.</span>
        </div>
      }
    >
      <span className="inline-block border-4 rounded-full p-2">
        <ArrowTrendingUpIcon className="w-5 h-5 text-gray-400" />
      </span>
    </Tooltip>
  </div>
);
