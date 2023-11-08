import React, { useState, createContext, useContext } from 'react';

export const menuContext = createContext<MenuContextType | null>(null);

type MenuContextType = {
  menuIsClicked: boolean;
  toggleMenuIsClicked: () => void;
};


export function MenuContextTheFunctionProvider({ children }: { children: React.ReactNode }) {
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const toggleMenuIsClicked = () => {
    setMenuIsClicked((prevMenuIsClicked) => !prevMenuIsClicked);
  };

  return (
    <menuContext.Provider value={{ menuIsClicked, toggleMenuIsClicked }}>
      {children}
    </menuContext.Provider>
  );
}

export function useMenuContext() {
  const context = useContext(menuContext);
  if (context === null) {
    throw new Error('useMenuContext must be used within a MyContextProvider');
  }
  return context;
}
