import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export const Section: FC<PropsWithChildren<{
    title?: string;
    titleMargin?: boolean;
}>> = ({
    title,
    children,
    titleMargin = true,
}) => {
    return <section className="max-w-4xl mx-auto px-8 lg:px-0">
        {title && <h2 className={clsx("text-2xl font-extrabold text-center sm:text-start", titleMargin && "mb-8")}>{title}</h2>}
         { children }
    </section>
}