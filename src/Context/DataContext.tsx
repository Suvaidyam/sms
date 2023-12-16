import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextType {
  hide: string;
  sethide: (newData: string) => void;
  SchoolName: any[] | null;
  setSchoolName: (newData: any[] | null) => void;
  roleType: string;
  setroleType: (newData: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [hide, sethide] = useState<string>('block');
  const [SchoolName, setSchoolName] = useState<any[] | null>(null);
  const [roleType, setroleType] = useState<string>('')

  return (
    <DataContext.Provider value={{ hide, sethide , SchoolName, setSchoolName ,roleType, setroleType}}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
