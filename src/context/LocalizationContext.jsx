import { createContext, useContext, useEffect, useState } from "react";

const LocalizationContext = createContext();

function LocalizationProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(
    function () {
      if (language === "ru") {
        document.documentElement.lang = "ru";
        document.documentElement.classList.add("ru");
        document.documentElement.classList.remove("en");
      } else {
        document.documentElement.lang = "en";

        document.documentElement.classList.remove("ru");
      }
    },
    [language],
  );

  function toggleLanguage() {
    setLanguage((lang) => (lang === "en" ? "ru" : "en"));
  }

  return (
    <LocalizationContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
}

function useLocalization() {
  const context = useContext(LocalizationContext);
  if (context === undefined)
    throw new Error(
      "LocalizationContext was used outside of LocalizationProvider",
    );
  return context;
}

export { LocalizationProvider, useLocalization };
