"use client";

import {useLocale} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";

export default function LanguageSwitcher() {

  const locale = useLocale();

  const pathname = usePathname();
  const router = useRouter();

  function changeLanguage(locale: string) {
    router.replace(pathname, {locale});
  }

  return (
    <select
      value={locale}
      onChange={(e) => changeLanguage(e.target.value)}
      className="border border-gray-300 rounded px-2 py-1"
    >
      <option value="en">EN</option>
      <option value="ru">RU</option>
      <option value="uz">UZ</option>
    </select>
  );
}