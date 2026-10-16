import React, { createContext, useContext, useState } from "react";

interface StickyNavbarContextType {
  sticky: boolean;
  setSticky: React.Dispatch<React.SetStateAction<boolean>>;
}

const StickyNavbarContext = createContext<StickyNavbarContextType | undefined>(undefined);

export const StickyNavbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sticky, setSticky] = useState(true);

  return (
    <StickyNavbarContext.Provider value={{ sticky, setSticky }}>
      {children}
    </StickyNavbarContext.Provider>
  );
};

export const useStickyNavbar = () => {
  const context = useContext(StickyNavbarContext);
  if (context === undefined) {
    throw new Error("useStickyNavbar must be used within a StickyNavbarProvider");
  }
  return context;
};
