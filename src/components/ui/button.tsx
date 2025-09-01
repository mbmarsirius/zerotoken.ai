import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-xl ripple-effect hover-lift",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105 ripple-effect",
        outline:
          "border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground hover:scale-105 hover-lift",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 hover-lift ripple-effect",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105 hover-lift",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105",
        
        // Premium ZeroToken brand variants 
        "brand-primary": "bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 hover:shadow-2xl hover:scale-110 transition-all duration-500 ripple-effect hover-lift animate-glow-pulse",
        "brand-secondary": "bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 hover:shadow-xl hover:scale-110 transition-all duration-500 ripple-effect hover-lift animate-glow-lime", 
        "brand-outline": "border-2 border-primary text-primary bg-transparent rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 hover-lift ripple-effect",
        "ghost-modern": "text-foreground hover:bg-muted rounded-full transition-all duration-300 hover:scale-105 hover-lift",
        "hero-primary": "bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground rounded-full font-bold text-lg hover:from-primary/90 hover:to-primary/80 hover:shadow-2xl hover:scale-110 transition-all duration-500 animate-glow-pulse ripple-effect hover-lift",
        "hero-outline": "border-2 border-white/40 text-white bg-white/15 backdrop-blur-md rounded-full font-semibold hover:bg-white/25 hover:border-white/60 hover:scale-110 transition-all duration-500 hover-lift glass-effect",
        
        // Legacy variants for compatibility 
        "lime-pill": "bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 hover:shadow-xl transition-all duration-500 hover:scale-110 ripple-effect hover-lift animate-glow-lime",
        "pink-outline": "border-2 border-primary text-primary bg-transparent rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 hover-lift ripple-effect",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-16 px-12 py-4 text-lg font-semibold",
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
