import { FC } from "react";
import { Section } from "../layouts/Section";
import { getI18n } from "@/locales/server";

export const Skills: FC = async () => {
    const t = await getI18n();

    return <Section title={t("home.skills")}>
        <ul className="list-disc pl-4">
            <li>
                <p>
                    {t("home.skill_categories.PROGRAMMING_LANGUAGE")}
                    <strong>Javascript/Typescript, Golang, Python, C, C++</strong>
                </p>
            </li>
            <li>
                <p>
                    {t("home.skill_categories.FRONT_END_TECHNOLOGY")}
                    <strong>React, React Native, Next.js</strong>
                </p>
            </li>
            <li>
                <p>
                    {t("home.skill_categories.BACK_END_TECHNOLOGY")}
                    <strong>Nodejs, Nestjs, Express</strong>
                </p>
            </li>
            <li>
                <p>
                    {t("home.skill_categories.VIDEO_GAME")}
                    <strong>Phaser, Canvas API, SDL2 (C/C++), Godot</strong>
                </p>
            </li>
            <li>
                <p>
                    {t("home.skill_categories.OTHER_TECHNOLOGY_OR_TOOL")}
                    <strong>Git, Docker, SQL, MongoDB, PostgreSQL</strong>
                </p>
            </li>
        </ul>
    </Section>
}