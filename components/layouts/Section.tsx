import { FC, PropsWithChildren } from "react";

export const Section: FC<PropsWithChildren<{
    title: string;
}>> = ({
    title,
    children,
}) => {
    return <section className="mb-10">
         <h2 className="text-lg font-semibold mb-3">{title}</h2>
         { children }
    </section>
}