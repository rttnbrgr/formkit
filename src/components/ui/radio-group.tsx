"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

type RadioGroupRef = React.ElementRef<typeof RadioGroupPrimitive.Root>;
type RadioGroupProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> & {
  stack?: boolean;
};

const RadioGroup = React.forwardRef<RadioGroupRef, RadioGroupProps>(
  ({ className, stack = true, ...props }, ref) => {
    const direction = stack ? "flex-col" : "flex-row";

    return (
      <RadioGroupPrimitive.Root
        className={cn("flex gap-4", direction, className)}
        {...props}
        ref={ref}
      />
    );
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

// Item
const _box = "aspect-square h-7 w-7 rounded-full";
const _border = "border-2 border-dashed border-form-fg";
const _typography = "text-primary";
const _focus =
  "ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const _disabled = "disabled:cursor-not-allowed disabled:opacity-50";
const _error = "aria-[invalid=true]:border-error-fg";

// Indicator
const _indicator = "flex items-center justify-center";

//  Circle
const _circle = "h-5 w-5 fill-interactive text-interactive";

type RadioGroupItemRef = React.ElementRef<typeof RadioGroupPrimitive.Item>;
type RadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
>;

const RadioGroupItem = React.forwardRef<RadioGroupItemRef, RadioGroupItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          _box,
          _border,
          _typography,
          _focus,
          _disabled,
          _error,
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className={_indicator}>
          <Circle className={_circle} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
