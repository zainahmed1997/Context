import React, { createContext } from 'react';

 export const LanguageContext = createContext();

export
const languages = {
  en: 'Current time',
  it: 'Ora corrente',
};

 export const LanguageProvider = ({ children, language }) => {
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
};

