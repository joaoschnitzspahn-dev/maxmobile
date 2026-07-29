import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-light hover:scale-[1.02] glow-red-sm hover:glow-red active:scale-[0.98]",
        outline:
          "border border-white/20 bg-transparent text-white hover:border-primary/60 hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]",
        ghost:
          "text-foreground-muted hover:text-white hover:bg-white/5",
        glass:
          "glass text-white hover:bg-white/10 hover:border-primary/30 hover:scale-[1.02] active:scale-[0.98]",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#20bd5a] hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
