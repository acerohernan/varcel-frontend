import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonClasses = cva("py-2 px-3 rounded-md font-base text-base", {
  variants: {
    variant: {
      primary: "bg-black text-white transition-all border border-black hover:bg-white hover:text-black",
      outlined: "bg-white border border-border_gray text-gray-400 transition-all hover:border-black hover:text-black",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonClasses> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, forwardedRef) {
  const { children, variant } = props;

  return (
    <button {...props} ref={forwardedRef} className={`${buttonClasses({ variant })}`}>
      {children}
    </button>
  );
});

export default Button;
