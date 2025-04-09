"use client";

import { FC, FormEventHandler, KeyboardEventHandler, useRef } from "react";
import { useI18n } from "@/locales/client";

export const SearchBar: FC<{
    placeholder?: string;
    onValidate?: (text: string) => void;
    onChange?: (text: string) => void;
    defaultValue?: string;
}> = ({
    placeholder,
    onChange,
    onValidate,
    defaultValue,
}) => {
    const t = useI18n();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: FormEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        onChange?.(e.currentTarget.value);
    };

    const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onValidate?.(e.currentTarget.value);
        }
    };

    const handleCancel = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
            onValidate?.("");
        }
    }

    return (
        <div className="shadow-lg w-full bg-white rounded-2xl flex items-center border border-gray-200 focus-within:ring-2 focus-within:ring-gray-800 transition">
            <input
                ref={inputRef}
                type="text"
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                placeholder={placeholder}
                className="w-full bg-transparent text-gray-800 text-md outline-none p-3"
                defaultValue={defaultValue}
            />
            <button
                className="text-xs p-3"
                onClick={handleCancel}
            >{t("cancel")}</button>
        </div>
    );
};
