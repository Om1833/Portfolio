"use client";

import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
}

export function Section({ id, children, className }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </section>
    );
}
