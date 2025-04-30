import { FC } from "react";
import { Section } from "../../layouts/Section";
import { getI18n } from "@/locales/server";
import { SkillCard } from "@/components/molecule/presentation/SkillCard";

const skills: {
    name: string;
    imageSrc: string;
    imageAlt: string;
}[] = [
    {
        name: "Javascript",
        imageSrc: "/images/skills-images/javascript.png",
        imageAlt: "Javascript Logo",
    },
    {
        name: "Typescript",
        imageSrc: "/images/skills-images/typescript.png",
        imageAlt: "Typescript Logo",
    },
    {
        name: "Golang",
        imageSrc: "/images/skills-images/golang.png",
        imageAlt: "Golang Logo",
    },
    {
        name: "Python",
        imageSrc: "/images/skills-images/python.png",
        imageAlt: "Python Logo",
    },
    {
        name: "C",
        imageSrc: "/images/skills-images/c.png",
        imageAlt: "C Logo",
    },
    {
        name: "C++",
        imageSrc: "/images/skills-images/cpp.png",
        imageAlt: "C++ Logo",
    },
    {
        name: "React",
        imageSrc: "/images/skills-images/react.png",
        imageAlt: "React Logo",
    },
    {
        name: "React Native",
        imageSrc: "/images/skills-images/react-native.png",
        imageAlt: "React Native Logo",
    },
    {
        name: "Next.js",
        imageSrc: "/images/skills-images/nextjs.png",
        imageAlt: "Next.js Logo",
    },
    {
        name: "Node js",
        imageSrc: "/images/skills-images/nodejs.png",
        imageAlt: "Node js Logo",
    },
    {
        name: "Nest js",
        imageSrc: "/images/skills-images/nestjs.png",
        imageAlt: "Nest js Logo",
    },
    {
        name: "Express",
        imageSrc: "/images/skills-images/express.png",
        imageAlt: "Express Logo",
    },
    {
        name: "Phaser",
        imageSrc: "/images/skills-images/phaser.png",
        imageAlt: "Phaser Logo",
    },
    {
        name: "Canvas API",
        imageSrc: "/images/skills-images/javascript.png",
        imageAlt: "Canvas API Logo",
    },
    {
        name: "SDL2 (C/C++)",
        imageSrc: "/images/skills-images/sdl2.png",
        imageAlt: "SDL2 Logo",
    },
    {
        name: "Godot",
        imageSrc: "/images/skills-images/godot.png",
        imageAlt: "Godot Logo",
    },
    {
        name: "Git",
        imageSrc: "/images/skills-images/git.png",
        imageAlt: "Git Logo",
    },
    {
        name: "Docker",
        imageSrc: "/images/skills-images/docker.png",
        imageAlt: "Docker Logo",
    },
    {
        name: "MongoDB",
        imageSrc: "/images/skills-images/mongodb.png",
        imageAlt: "MongoDB Logo",
    },
    {
        name: "PostgreSQL",
        imageSrc: "/images/skills-images/postgresql.png",
        imageAlt: "PostgreSQL Logo",
    },
    {
        name: "Blender",
        imageSrc: "/images/skills-images/blender.png",
        imageAlt: "Blender Logo",
    },
]

export const Skills: FC = async () => {
    const t = await getI18n();

    return <div className="py-10 md:py-20 mb-16">
        <Section title={"🚀 " + t("home.skills")}>
            <ul className="list-none grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] gap-2 sm:gap-5 sm:grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
                {skills.map(skill => (
                    <li key={skill.name}>
                        <SkillCard name={skill.name} imageSrc={skill.imageSrc} imageAlt={skill.imageAlt}/>
                    </li>
                ))}
            </ul>
        </Section>
    </div> 
}