import Image from "next/image";
import { FC } from "react";

export const SkillCard: FC<{
    name: string;
    imageSrc: string;
    imageAlt: string;
}> = ({
    name,
    imageSrc,
    imageAlt,
}) => {
    return <article className="flex flex-col items-center gap-1 text-lg cursor-pointer transition-transform ease-in-out duration-300 hover:scale-105">
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} className="aspect-[1/1] object-cover rounded-lg shadow-md border border-gray-200"/>
        <span className="text-center text-sm text-gray-600 hidden sm:block">{name}</span>
    </article>
}