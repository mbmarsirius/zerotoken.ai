import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground hover:scale-105",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
        
        // ZeroToken brand variants - Clean & Modern
        "brand-primary": "bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 hover:shadow-xl hover:scale-105 transition-all duration-300",
        "brand-secondary": "bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 hover:shadow-lg hover:scale-105 transition-all duration-300", 
        "brand-outline": "border-2 border-primary text-primary bg-transparent rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105",
        "ghost-modern": "text-foreground hover:bg-muted rounded-full transition-all duration-300 hover:scale-105",
        "hero-primary": "bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 hover:shadow-xl hover:scale-110 transition-all duration-300 animate-glow-pulse",
        "hero-outline": "border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm rounded-full font-medium hover:bg-white/20 hover:border-white/50 transition-all duration-300",
        
        // Legacy variants for compatibility 
        "lime-pill": "bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 hover:shadow-lg transition-all duration-300 hover:scale-105",
        "pink-outline": "border-2 border-primary text-primary bg-transparent rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-12 rounded-lg px-8",
        xl: "h-16 px-10 py-4 text-lg",
        icon: "h-11 w-11",
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
