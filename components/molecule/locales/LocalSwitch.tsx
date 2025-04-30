import { LocalFlag } from "@/components/molecule/locales/LocalFlag";
import { FC } from "react";

export const LocalSwitch: FC = () => {
    return <div className="flex flex-row gap-2">
        <LocalFlag lang="fr"/>
        <LocalFlag lang="en"/>
    </div>
}