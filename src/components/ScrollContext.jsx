"use client";

import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const [isScrollingMode, setIsScrollingMode] = useState(false);
  const [scrollComplete, setScrollComplete] = useState(false);

  return (
    <ScrollContext.Provider value={{
      isScrollingMode,
      setIsScrollingMode,
      scrollComplete,
      setScrollComplete
    }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  
  return context;
};
