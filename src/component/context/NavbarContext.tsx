// src/context/NavbarContext.tsx

import React, { createContext, useContext, useState } from "react";

// Create the context
const NavbarContext = createContext<{ isNavbarExpanded: boolean; toggleNavbar: () => void } | undefined>(undefined);

// Create a provider component
export const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarExpanded((prev) => !prev);
  };

  return (
    <NavbarContext.Provider value={{ isNavbarExpanded, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom hook to use the Navbar context
export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }
  return context;
};
