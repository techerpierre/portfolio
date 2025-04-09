import { getI18n } from "@/locales/server";
import { FC } from "react";

export const NoProjectsPlaceholder: FC = async () => {
    const t = await getI18n();
    return <div className="w-full sm:w-1/3 mx-auto m-16">
        <p className="font-bold text-xl text-center">🤔 {t("projects.empty_list_placeholder")}</p>
    </div>
}