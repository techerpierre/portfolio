import clsx from "clsx";
import { FC } from "react";

export const Tag: FC<{
    active?: boolean;
    children: string;
}> = ({
    active = false,
    children,
}) => {
    return <div
        className={clsx("px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded", active && "bg-gray-300 text-gray-800")}
    >
        <span className="text-sm">{ children }</span>
    </div>
}