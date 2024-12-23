import {ButtonProps} from "@/shared/ui/button/Button.interface";
import {constructClassNames} from "@/shared/ui/button/Button.classnames";

export default function Button({variant = "primary", children, className, ...props}: ButtonProps) {
    return <button {...props} className={constructClassNames(variant, className)}>{children}</button>
}