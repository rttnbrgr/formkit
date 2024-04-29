"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * TODO:
 * -----
 * Error styles
 * check disabled
 */

/**
 * Checkbox Container
 */
const _box = "group peer shrink-0 h-7 w-7 p-0.5";
const _border = "border-2 border-dashed border-form-fg";
const _focus =
  "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const _checked = "";
// const _checked = "data-[state=checked]:bg-interactive data-[state=checked]:text-interactive-foreground data-[state=checked]:border-none";
const _disabled = "disabled:cursor-not-allowed disabled:opacity-50";

/**
 * Checkbox Indicator
 */
const _innerBox = "flex items-center justify-center w-full h-full";
const _innerChecked = "text-current bg-interactive text-interactive-fg";

type CheckboxRef = React.ElementRef<typeof CheckboxPrimitive.Root>;
type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>;

const Checkbox = React.forwardRef<CheckboxRef, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(_box, _border, _focus, _checked, _disabled, className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn([_innerBox, _innerChecked])}>
        <Check className="h-3.5 w-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
