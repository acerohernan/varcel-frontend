import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonClasses = cva("rounded-md font-base text-base focus:ring-2 ring-black ring-offset-1", {
  variants: {
    variant: {
      primary: "bg-black text-white transition-all border border-black hover:bg-white hover:text-black outline-none",
      outlined:
        "bg-white border border-border_gray text-gray-400 transition-all hover:border-black hover:text-black outline-none",
    },
    layout: {
      default: "py-2 px-3",
      icon: "p-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    layout: "default",
  },
});

export interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonClasses> {
  full?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, forwardedRef) {
  const { children, variant, layout, full, className } = props;

  return (
    <button
      {...props}
      ref={forwardedRef}
      className={`${buttonClasses({ variant, layout, className })} ${full && "w-full"}`}
    >
      {children}
    </button>
  );
});

export default Button;
