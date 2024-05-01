import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const _base =
  "inline-flex items-center justify-center rounded-full transition-colors h-[58px] px-8";
const _typography = "whitespace-nowrap text-md font-sans font-normal uppercase";
const _focus =
  "ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const _disabled = "disabled:pointer-events-none disabled:opacity-50";

const _fill = "bg-foreground text-background hover:bg-interactive";
const _outline =
  "border-2 border-dashed border-foreground bg-background hover:bg-foreground hover:text-background";

const buttonVariants = cva(cn(_base, _typography, _focus, _disabled), {
  variants: {
    variant: {
      fill: _fill,
      outline: _outline,

      link: "text-primary underline-offset-4 hover:underline",
    },
  },
  defaultVariants: {
    variant: "fill",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
