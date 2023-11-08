import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleVariants = cva("text-2xl font-semibold lg:text-4xl text-center", {
  variants: {
    variant: {
      default: "flex justify-center items-center",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface HeadingProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, ...props }, ref) => {
    const Comp = "h2";
    return (
      <Comp
        className={cn(titleVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Heading.displayName = "Heading";

export { Heading, titleVariants };
