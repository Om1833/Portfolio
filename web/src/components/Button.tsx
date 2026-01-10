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
                    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
                    {
                        "bg-white text-black hover:bg-zinc-200": variant === "primary",
                        "bg-zinc-800 text-white hover:bg-zinc-700": variant === "secondary",
                        "border border-white/20 text-white hover:bg-white/10 hover:border-white/40": variant === "outline",
                        "text-zinc-400 hover:text-white hover:bg-white/5": variant === "ghost",

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
