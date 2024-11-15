import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface MovingGradientProps extends ComponentPropsWithoutRef<"div"> {
    animated?: boolean;
    gradientClassName?: string;
}

export default function MovingGradient({
                                           children,
                                           className,
                                           animated = true,
                                           gradientClassName,
                                           ...props
                                       }: MovingGradientProps) {
    const backgroundClassName = "pointer-events-none absolute h-full w-full";
    return (
        <div {...props} className={cn("relative overflow-hidden bg-white", className)}>
            <div
                className={cn(
                    "bg-size bg-gradient-to-r from-wisteria dark:from-new-yellow from-30% via-[#995fb6] via-50% to-java to-80% opacity-15",
                    {
                        [backgroundClassName]: true,
                        "animate-bgposition bg-[length:300%_auto]": animated,
                    },
                    gradientClassName,
                )}
            />
            <div className={cn(backgroundClassName, "z-1 blur-lg")} />
            {children}
        </div>
    );
}
