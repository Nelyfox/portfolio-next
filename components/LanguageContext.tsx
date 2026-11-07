"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Langue = "fr" | "en";

type LanguageContextType = {
  langue: Langue;
  changerLangue: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [langue, setLangue] = useState<Langue>("fr");

  function changerLangue() {
    setLangue((ancienneLangue) =>
      ancienneLangue === "fr" ? "en" : "fr"
    );
  }

  return (
    <LanguageContext.Provider value={{ langue, changerLangue }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage doit être utilisé dans LanguageProvider");
  }

  return context;
}