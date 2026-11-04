export const themeStorageKey = "theme";

export const themeInitScript = `(function(){var r=document.documentElement;r.classList.add("js");try{var s=localStorage.getItem(${JSON.stringify(themeStorageKey)});var d=s==="dark"||(s!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);r.classList.toggle("dark",d);}catch(e){}})();`;
