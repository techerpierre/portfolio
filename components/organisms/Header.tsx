import Link from "next/link";
import { FC } from "react";
import { Navbar } from "../molecule/navigation/Navbar";
import Image from "next/image";
import { LocalSwitch } from "../molecule/locales/LocalSwitch";

export const Header: FC = async () => {
    return <header className="w-full max-w-4xl mx-auto flex flex-row items-center px-8 gap-4 pt-16 sm:px-0 justify-between">
        <Link href="/">
            <Image
                src="/images/logo_pierre.svg"
                alt="Logo Pierre Techer"
                width={32}
                height={32}
                priority
                className="hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1 sm:mr-0"
            />
        </Link>
        <div className="flex flex-row gap-8">
            <Navbar/>
            <LocalSwitch/>
        </div>
    </header>
}
