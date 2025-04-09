"use client"

import { I18nProviderClient } from "@/locales/client";
import { FC, PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export const Providers: FC<PropsWithChildren<{ locale: string }>> = (props) => {
    return <>
        <I18nProviderClient locale={props.locale}>{props.children}</I18nProviderClient>
        <Toaster/>
    </>
}