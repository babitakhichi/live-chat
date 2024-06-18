import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "de"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    de: "/pfadnamen",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = "as-needed";

export type AppPathnames = keyof typeof pathnames;

export const config = {
  NAME_KEY: process.env.NEXT_PUBLIC_NAME_KEY || "Base App",
  NAME_TITLE: process.env.NEXT_PUBLIC_NAME_TITLE || "app",

  BASE_URL: process.env.NEXT_PUBLIC_APP_URL,

  BACKEND_BASE_URL: process.env.NEXT_PUBLIC_API_URL,
};
