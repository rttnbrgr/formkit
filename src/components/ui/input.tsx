import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

/**
 * Input
 * ---
 */

// FIX: placeholder, typography

const _base = "flex h-9 w-full bg-grey1 ";
const _border = "";
// const _typography = "typography-2 placeholder:text-muted-foreground";
const _typography =
  "font-sans text-xl not-italic font-normal text-current placeholder:text-black/20";
const _focus = "focus-visible:outline-none";
const _disabled = "disabled:cursor-not-allowed disabled:opacity-50";

const inputVariants = cva([_base, _border, _typography, _focus, _disabled]);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants(), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
