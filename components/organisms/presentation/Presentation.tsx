import { FC } from "react";
import { Section } from "../../layouts/Section";
import { getI18n } from "@/locales/server";
import Image from "next/image";

export const Presentation: FC = async () => {
  const t = await getI18n();

  const getRandomCover = (): string => {
    const covers = [
      "default.png",
    ];
    const coverIndex = Math.floor(Math.random() * covers.length);
    return `/images/presentation-covers/${covers[coverIndex]}`;
  }

  return (
    <div className="bg-gray-100 py-10 md:py-20">
      <Section title={"🧑‍💻 " + t("home.about_me")}>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-64 flex-shrink-0">
            <Image
              src={getRandomCover()}
              alt="hero cover"
              width={300}
              height={400}
              className="aspect-[3/4] object-cover rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1"
            />
          </div>
          <div className="flex flex-col gap-4 text-gray-800 max-w-2xl text-justify">
            <p>{t("home.presentation.0")}</p>
            <p>{t("home.presentation.1")}</p>
            <p>{t("home.presentation.2")}</p>
            <p>{t("home.presentation.3")}</p>
            <p>{t("home.presentation.4")}</p>
          </div>
        </div>
      </Section>
    </div>
  );
};
