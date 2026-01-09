import { cn } from "@/lib/utils";

export function StaxSection({ 
    children, 
    className, 
    background = "white",
    width = "wide", // wide, full, content
    padding = true
}) {
    const bgColors = {
        white: "bg-white dark:bg-stax-black transition-colors duration-300",
        light: "bg-stax-bg-light dark:bg-stax-dark-gray/10 transition-colors duration-300",
        dark: "bg-stax-bg-dark dark:bg-black transition-colors duration-300",
        accent: "bg-primary dark:bg-primary/10 transition-colors duration-300",
        black: "bg-black transition-colors duration-300"
    };

    const widthClasses = {
        wide: "alignwide",
        full: "alignfull",
        content: "aligncontent"
    };

    return (
        <section className={cn(
            bgColors[background],
            padding ? "py-16 md:py-24" : "",
            className
        )}>
            <div className={cn(width !== "full" ? widthClasses[width] : "w-full")}>
                {children}
            </div>
        </section>
    );
}
