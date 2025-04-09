"use client"

import UserClient from "@/clients/UserClient";
import { useI18n } from "@/locales/client";
import { FC } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const LoginForm: FC = () => {
    const t = useI18n();
    const router = useRouter();

    const onSubmit = (e: any) => {
        e.preventDefault();

        UserClient.login({
            email: e.target["email"].value,
            password: e.target["password"].value,
        }, e.target["remember"].checked).then(() => {
            router.push("/admin");
        }).catch(() => {
            toast.error(t("login.error"));
        });
    }

    return (
        <form onSubmit={onSubmit} className="w-full max-w-sm mx-auto p-8 bg-white border border-gray-200 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">{t("login.title")}</h2>

            <div className="flex flex-col mb-4">
                <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
                    {t("login.email_label")}:
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
            </div>

            <div className="flex flex-col mb-4">
                <label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700">
                    {t("login.password_label")}:
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
            </div>

            <div className="flex items-center gap-2 mb-6">
                <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="accent-gray-900"
                />
                <label htmlFor="remember" className="text-sm text-gray-900">
                    {t("login.remember_me")}
                </label>
            </div>

            <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
                {t("login.submit")}
            </button>
        </form>
    );
};
