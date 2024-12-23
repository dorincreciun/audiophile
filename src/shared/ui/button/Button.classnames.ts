import classNames from "classnames";

export const constructClassNames = (variant: string, className: string | undefined): string => {
    return classNames("py-[15px] px-[30px] font-bold text-[13px] tracking-[1px] uppercase transition-colors box-border",
        {
            "text-color-ff bg-color-d8 border border-transparent hover:bg-color-fb": variant === "primary",
            "text-color-00 bg-transparent border border-color-00 hover:text-color-ff hover:bg-color-00": variant === "secondary",
        },
        className
    );
}