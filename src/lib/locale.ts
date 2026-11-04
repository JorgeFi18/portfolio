export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
export const localeCookie = "locale";

export function isLocale(value: string): value is Locale {
  return value === "es" || value === "en";
}

// One-time move from the old localStorage switch to the URL.
export const localeMigrationScript = `(function(){try{var s=localStorage.getItem("locale");if(s!=="en"&&s!=="es")return;localStorage.removeItem("locale");var p=location.pathname;if(p==="/"+s||p.indexOf("/"+s+"/")===0)return;location.replace("/"+s+location.hash);}catch(e){}})();`;
