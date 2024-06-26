import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { richTextConfig } from "@/shared/consts/rich-text-config";

// Can be imported from a shared config
const locales = ["uk", "ru"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    defaultTranslationValues: {
      ...richTextConfig,
    },
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
