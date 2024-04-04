import { AppStateI } from '@/interfaces/AppStateI';
import { FileSystemTree } from '@/utils/FileSystemTree';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppStateI | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [fileSystemTree] = useState(new FileSystemTree());
  const [currentDirectory, setCurrentDirectory] = useState(fileSystemTree.getCurrentDirectory());
  
  // VERY IMPORTANT: States have to be updated using the functions provided in the context, cannot from the component directly!!
  const contextValue = {
    fileSystemTree : fileSystemTree,
    currentDirectory: currentDirectory,
    setCurrentDirectory: setCurrentDirectory,
    // Other states & functions
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppStateI => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
