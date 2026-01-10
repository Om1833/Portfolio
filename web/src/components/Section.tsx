import { cn } from "@/utils/cn";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    fullWidth?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, children, fullWidth = false, id, ...props }, ref) => {
        return (
            <section
                ref={ref}
                id={id}
                className={cn("py-24 md:py-32 w-full scroll-mt-20", className)}
                {...props}
            >
                <div
                    className={cn(
                        "mx-auto px-6 md:px-12",
                        fullWidth ? "w-full" : "max-w-7xl"
                    )}
                >
                    {children}
                </div>
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
