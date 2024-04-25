import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

// need modified fill
const _base = "flex flex-col px-4 pt-3 pb-[1px] gap-1.5 rounded-t-md bg-grey2";
const _border = "border border-dashed border-transparent border-b-blackk";
const _focus =
  "focus-within:border-2 focus-within:border-solid focus-within:border-blackk focus-within:pt-[11px] focus-within:px-[15px] focus-within:pb-0";
const _error =
  "border-redNew border-solid focus-within:border-redNew text-redNew";

// ? set text to be contextual
// ? set height or adjust padding
// should be 70 via figam
// setting to 74 until we adjust input height

const wrappedInputVariants = cva([_base, _border, _focus, ""], {
  variants: {
    hasError: {
      false: "",
      true: [_error],
    },
  },
  defaultVariants: {
    hasError: false,
  },
});

export type InputWrapProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof wrappedInputVariants>;

export const InputWrap = React.forwardRef<HTMLDivElement, InputWrapProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(wrappedInputVariants({ hasError }), className)}
        {...props}
      />
    );
  }
);
InputWrap.displayName = "Input Wrap";
