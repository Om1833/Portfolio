"use client";

import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-500 hover:to-violet-500 focus:ring-purple-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40",
        secondary: "bg-white/10 text-white hover:bg-white/20 focus:ring-white/30",
        outline: "border border-white/20 text-white hover:bg-white/10 focus:ring-white/30",
        ghost: "text-white/70 hover:text-white hover:bg-white/10 focus:ring-white/30",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm rounded-lg",
        md: "px-6 py-3 text-base rounded-xl",
        lg: "px-8 py-4 text-lg rounded-xl",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
