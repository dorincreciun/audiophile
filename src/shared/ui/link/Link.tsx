import {LinkProps} from "@/shared/ui/link/Link.interface";
import {ChevronRight} from "lucide-react";

export default function Link({ children, ...props }: LinkProps) {
    return (
        <a {...props} className="flex items-center gap-[13px] transition-colors hover:text-color-d8 uppercase text-[13px] font-bold tracking-[1px] text-color-00 text-opacity-50 cursor-pointer">
            {children} <ChevronRight className="text-color-d8" />
        </a>
    );
}
