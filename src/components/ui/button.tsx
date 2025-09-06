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
        
        // Enhanced liquid glass variants
        "hero-primary": "relative bg-gradient-to-r from-pink to-pink/90 hover:from-pink/90 hover:to-pink text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-skew-x-12 before:translate-x-[-100%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        "hero-outline": "bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-white/10 hover:border-white/50",
        "glass": "bg-white/10 backdrop-blur-2xl text-white border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105",
        "liquid": "bg-gradient-to-br from-lime/20 to-pink/20 backdrop-blur-xl text-foreground border border-white/30 hover:from-lime/30 hover:to-pink/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:-skew-x-12 after:translate-x-[-100%] hover:after:translate-x-[200%] after:transition-transform after:duration-700",
        "aurora": "bg-gradient-to-r from-pink via-lime to-lavender bg-[length:200%_200%] animate-aurora text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105",
        
        // ZeroToken brand variants - Clean & Modern  
        "brand-primary": "bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 hover:shadow-xl hover:scale-105 transition-all duration-300",
        "brand-secondary": "bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 hover:shadow-lg hover:scale-105 transition-all duration-300", 
        "brand-outline": "border-2 border-primary text-primary bg-transparent rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105",
        "ghost-modern": "text-foreground hover:bg-muted rounded-full transition-all duration-300 hover:scale-105",
        
        // ZeroToken pricing button variants
        "pricing-pink": "bg-pink/10 text-pink border border-pink/30 hover:bg-pink/40 hover:border-pink hover:text-white hover:shadow-lg hover:shadow-pink/25 active:bg-pink/50 active:scale-95 transition-all duration-300",
        "pricing-lime": "bg-lime/10 text-lime border border-lime/30 hover:bg-lime/40 hover:border-lime hover:text-white hover:shadow-lg hover:shadow-lime/25 active:bg-lime/50 active:scale-95 transition-all duration-300",
        "pricing-lavender": "bg-lavender/10 text-lavender border border-lavender/30 hover:bg-lavender/40 hover:border-lavender hover:text-white hover:shadow-lg hover:shadow-lavender/25 active:bg-lavender/50 active:scale-95 transition-all duration-300",
        
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
