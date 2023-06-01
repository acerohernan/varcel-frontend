import React from "react";
import { VariantProps, cva } from "class-variance-authority";

const inputClasses = cva("outline-none text-base rounded-md transition-all flex", {
  variants: {
    variant: {
      default: "border border-border_gray focus-within:border-black",
      error: "border border-red-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface InputProps extends React.ComponentProps<"input">, VariantProps<typeof inputClasses> {
  full?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorMsg?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, forwardedRef) {
  const { variant, full, leftIcon, rightIcon, errorMsg, ...inputProps } = props;
  return (
    <>
      <div className={`${inputClasses({ variant: errorMsg ? "error" : variant })} ${full && "w-full"}`}>
        {React.isValidElement(leftIcon) && <>{leftIcon}</>}
        <input ref={forwardedRef} className="outline-none w-full px-3 py-2" {...inputProps} />
        {React.isValidElement(leftIcon) && <>{rightIcon}</>}
      </div>
      <span className="block mt-1 text-sm text-red-600">{errorMsg}</span>
    </>
  );
});

export default Input;
