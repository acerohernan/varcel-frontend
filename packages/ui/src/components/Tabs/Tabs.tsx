import React from "react";

const Root: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="flex border-b">{children}</div>;
};

interface ItemProps extends React.ComponentProps<"button"> {
  children?: React.ReactNode;
  selected?: boolean;
}

const Item: React.FC<ItemProps> = ({ children, selected, ...props }) => {
  return (
    <div>
      <button
        className={`text-base py-2 px-3 hover:bg-black/5 rounded-md mb-1 ${selected ? "text-black" : "text-gray-400"}`}
        {...props}
      >
        {children}
      </button>
      {selected && <div className="flex border-b-2 h-1 border-black mx-3" />}
    </div>
  );
};
export default {
  Root,
  Item,
};
