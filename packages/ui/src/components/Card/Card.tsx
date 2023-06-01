import React from "react";
import { GitHubLogoIcon, SliderIcon } from "@radix-ui/react-icons";
import { Tooltip } from "../Tooltip";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

const Card = () => {
  return (
    <div className="bg-white border p-6 shadow-sm transition-all hover:shadow-md rounded-md cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            alt="avatar"
            src="https://vercel.com/api/www/avatar/0Et9ua7NbSpfga08HSlUpfTF?&s=60"
          />
          <div>
            <span className="block font-base">mitienda-frontend</span>
            <span className="block text-base text-gray-400">mitienda.hacero.me</span>
          </div>
        </div>
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
      <div className="mt-5">
        <span className="block text-base font-base">test(frontend): Adding compatibility with Storybook</span>
        <div className="flex items-center gap-1">
          <SliderIcon />
          <span className="text-base">From master</span>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-6">
        <span className="text-base text-gray-400">1d ago vía</span>
        <GitHubLogoIcon />
      </div>
    </div>
  );
};

export default Card;
