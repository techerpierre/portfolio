import { FC, PropsWithChildren, ReactNode } from "react";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

export const MainLayout: FC<PropsWithChildren<{
    header?: ReactNode;
    headerShown?: boolean;
}>> = ({
    header,
    children,
    headerShown = true,
}) => {
    return <div className="min-h-screen flex flex-col gap-16">
        {headerShown && (header ? header : <Header/>)}
        <main className="flex-1">{ children }</main>
        <Footer/>
    </div>
}