"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Label
 * ---
 * A row that holds a checkbox or radio, and a label
 */

const _typography = "font-sans text-md font-normal leading-none text-form";
const _disabled = "peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

const labelVariants = cva([_typography, _disabled]);

type LabelRef = React.ElementRef<typeof LabelPrimitive.Root>;

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>;

const Label = React.forwardRef<LabelRef, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
  )
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

/**
 * Label Wrapper
 * ---
 * A row that holds a checkbox or radio, and a label
 */
const styles = "flex items-center space-x-3";

interface LabelWrapProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export const LabelWrap = ({ children }: LabelWrapProps) => (
  <div className={styles}>{children}</div>
);
