import { Section } from "@/components/layouts/Section";
import { getI18n } from "@/locales/server";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Hero: FC = async () => {
    const t = await getI18n();

    return (
        <div className="py-24 md:py-36 relative">
            <Section>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
                            {t("home.hero_title")}
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                            {t("home.hero_content")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/projects"
                                className="px-6 py-3 bg-black text-white font-medium rounded-xl shadow-md hover:bg-gray-800 transition"
                            >
                                {t("navigation.projects")}
                            </Link>
                            <Link
                                href="/blog"
                                className="px-6 py-3 bg-white text-black border border-gray-300 font-medium rounded-xl shadow-md hover:bg-gray-100 transition"
                            >
                                {t("navigation.blog")}
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/images/hero-cover.png"
                            alt="hero cover"
                            width={480}
                            height={320}
                            className="rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1"
                        />
                    </div>
                </div>
            </Section>
        </div>
    );
};
