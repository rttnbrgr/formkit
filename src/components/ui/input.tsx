import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";
import { cva, VariantProps } from "class-variance-authority";

/**
 * Input
 * ---
 */

// const _typography = "font-sans text-md font-normal leading-none text-form";
// const _typography = "font-sans text-md font-normal leading-none text-form";
// const _typographyOveride = "leading-none";
// const _disabled = "peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
const _base = "flex h-9 w-full bg-grey1 ";
// const _border = "border border-input ";
const _border = "";
// const _typography = "typography-2 placeholder:text-muted-foreground";
const _typography =
  "font-sans text-xl not-italic font-normal text-current placeholder:text-muted-foreground";
const _focus =
  // "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  "focus-visible:outline-none";
const _disabled = "disabled:cursor-not-allowed disabled:opacity-50";
// const _error = "placeholder:text-redNew";
const _error = "placeholder:text-black/20"; // fix

const inputVariants = cva([
  _base,
  _border,
  _typography,
  _focus,
  _disabled,
  _error,
]);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
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

export { Input };

/**
 * Input
 * ---
 */

// need modified fill
const _baseWrap =
  "flex flex-col px-4 pt-3 pb-[1px] gap-1.5 rounded-t-md bg-grey2";
// border-t-2 border-t-transparent
const _borderWrap = "border border-dashed border-transparent border-b-blackk";
const _focusWrap =
  "focus-within:border-2 focus-within:border-solid focus-within:border-blackk focus-within:pt-[11px] focus-within:px-[15px] focus-within:pb-0";

const _errorWrap =
  "border-redNew border-solid focus-within:border-redNew text-redNew";

// set text to be contextual

// set height or adjust padding
// should be 70 via figam
// setting to 74 until we adjust input height

const wrappedInputVariants = cva([_baseWrap, _borderWrap, _focusWrap, ""], {
  variants: {
    state: {
      default: [""],
      error: [_errorWrap],
    },
  },
  defaultVariants: {
    state: "default",
  },
});

// this is how we can do the typography
// const bar = wrappedInputVariants({ size: "foo" });
// console.log("bar", bar);

// type LabelRef = React.ElementRef<typeof LabelPrimitive.Root>;

// type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
//   VariantProps<typeof labelVariants>;

// const Label = React.forwardRef<LabelRef, LabelProps>(
//   ({ className, size, ...props }, ref) => (
//     <LabelPrimitive.Root
//       ref={ref}
//       className={cn(labelVariants({ size }), className)}
//       {...props}
//     />
//   )
// );
// Label.displayName = LabelPrimitive.Root.displayName;

// type WrappedInputRef = React.ElementRef<HTMLInputElement>;

// update this

// Label Props + Input props?
type WrappedInputRef = HTMLInputElement;
type WrappedInputProps = InputProps & VariantProps<typeof wrappedInputVariants>;

export const WrappedInput = React.forwardRef<
  WrappedInputRef,
  WrappedInputProps
>(({ className, state, placeholder }, ref) => {
  return (
    <div className={cn(wrappedInputVariants({ state }), className)}>
      <Label size="small">Label</Label>
      <Input placeholder={placeholder} />
      {/* icon */}
    </div>
  );
});

WrappedInput.displayName = "Input with Label";

type WrappedInputDumbProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof wrappedInputVariants>;

export const WrappedInputDumb = React.forwardRef<
  HTMLDivElement,
  WrappedInputDumbProps
>(({ className, state, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(wrappedInputVariants({ state }), className)}
      {...props}
    />
  );
});

WrappedInputDumb.displayName = "Wrapped Input";
