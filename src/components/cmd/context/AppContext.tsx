import { FileSystemTree } from '@/utils/FileSystemTree';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

interface AppState {
  fileSystemTree: FileSystemTree;
  // Add other global state or functions here
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [fileSystemTree] = useState(new FileSystemTree());
  
  const contextValue = {
    fileSystemTree : fileSystemTree,
    // Other states & functions
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppState => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
