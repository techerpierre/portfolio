import { FC } from "react";
import { Section } from "../layouts/Section";
import { getI18n } from "@/locales/server";

export const Presentation: FC = async () => {
    const t = await getI18n();

    return <Section title={t("home.about_me")}>
        <div className="flex flex-col gap-1">
          <p>{t("home.presentation.0")}</p>
          <p>{t("home.presentation.1")}</p>
          <p>{t("home.presentation.2")}</p>
          <p>{t("home.presentation.3")}</p>
          <p>{t("home.presentation.4")}</p>
        </div>
    </Section>
}