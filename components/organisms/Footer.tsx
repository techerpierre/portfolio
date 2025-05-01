import { FC } from "react";

export const Footer: FC = () => {
    return <footer className="w-full bg-black">
        <div className="w-full max-w-4xl mx-auto px-16 py-10 lg:px-0 flex flex-col gap-2">
            <a href="https://github.com/techerpierre" className="text-white">Github</a>
            <a href="mailto:techerpierre.pro@gmail.com" className="text-white">techerpierre.pro@gmail.com</a>
        </div>
    </footer>
}