import { FC, PropsWithChildren } from "react";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

export const MainLayout: FC<PropsWithChildren> = ({
    children,
}) => {
    return <div className="max-w-4xl min-h-screen mx-auto py-16 flex flex-col gap-16 px-8 lg:px-0">
        <Header/>
        <main className="flex-1">{ children }</main>
        <Footer/>
    </div>
}