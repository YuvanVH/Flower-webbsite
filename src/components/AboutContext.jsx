// src/components/AboutContext.jsx
import React, { createContext } from 'react';

// Skapa en ny kontext
export const AboutContext = createContext();

// Definiera en provider-komponent för att leverera värden till komponenter som är inkapslade i den
export const AboutProvider = ({ children }) => {
  // definiera det innehåll som jag vill göra tillgängligt för AboutView och andra komponenter som prenumererar på kontexten
  const aboutUsContent = "Välkommen till About Us-sidan!";

  return (
    <AboutContext.Provider value={{ aboutUsContent }}>
      {children}
    </AboutContext.Provider>
  );
};
