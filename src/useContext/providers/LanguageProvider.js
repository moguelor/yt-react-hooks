import React from "react";

const DefaultValue = {
  language: "ES",
  setLanguage: () => {},
};

const LanguageContext = React.createContext(DefaultValue);

export { DefaultValue,  LanguageContext};
export default LanguageContext.Provider;
