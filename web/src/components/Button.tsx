import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-stone-950 disabled:opacity-50 disabled:pointer-events-none active:scale-95 overflow-hidden",
                    {
                        // Primary - Orange gradient with glow
                        "bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 text-stone-950 font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:brightness-110": variant === "primary",
                        // Secondary - Warm dark
                        "bg-stone-800/80 text-orange-100 hover:bg-stone-700/80 border border-orange-500/20": variant === "secondary",
                        // Outline - Orange border
                        "border border-orange-500/30 text-orange-100 hover:bg-orange-500/10 hover:border-orange-500/50 backdrop-blur-sm": variant === "outline",
                        // Ghost
                        "text-orange-300/70 hover:text-orange-200 hover:bg-orange-500/10": variant === "ghost",

                        "text-xs px-4 py-2": size === "sm",
                        "text-sm px-6 py-3": size === "md",
                        "text-base px-8 py-4": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
