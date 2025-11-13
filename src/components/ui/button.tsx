import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-display",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/25 shadow-md active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105 shadow-md",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
        premium: "bg-gradient-primary text-primary-foreground hover:scale-105 hover:shadow-glow shadow-lg relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        glass: "glass border-primary/20 text-foreground hover:border-primary/40 hover:scale-105 backdrop-blur-xl",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-10 px-4 py-2 text-sm rounded-lg",
        lg: "h-14 px-8 py-4 text-base rounded-xl",
        xl: "h-16 px-10 py-5 text-lg rounded-2xl",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
