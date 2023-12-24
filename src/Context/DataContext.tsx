import React, { createContext, useContext, useState, ReactNode } from 'react';
interface UserData {
  id: number;
  username: string;
  email: string;
  mobile: string;
  school: {_id:string,schoolname:string}
  role: string;
}
interface DataContextType {
  hide: any;
  sethide: (newData: any) => void;
  SchoolName: any[] | null;
  setSchoolName: (newData: any[] | null) => void;
  roleType: string;
  setroleType: (newData: string) => void;
  OutletMyschool:string;
  setOutletMyschool:(newData: string) => void;
  userData:  UserData | null; 
  setuserData: (newData: UserData | null) => void;
  loginMassage: any; 
  setloginMassage: (newData: null) => void;
  massegeLogout:boolean;
  setmassegeLogout:(newData: boolean) => void;
  isMobileSidebarOpen:boolean;
  setisMobileSidebarOpen: (newData: boolean | ((prev: boolean) => boolean)) => void;
  hideUnhide:boolean;
  sethideUnhide: (newData: boolean | ((prev: boolean) => boolean)) => void;

}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [hide, sethide] = useState<any>('block');
  const [SchoolName, setSchoolName] = useState<any[] | null>(null);
  const [roleType, setroleType] = useState<string>('')
  const [OutletMyschool, setOutletMyschool] = useState<string>('block');
  const [userData, setuserData] = useState<any | null>(null);
  const [loginMassage, setloginMassage] = useState<any | null >(null);
  const [massegeLogout, setmassegeLogout] = useState<boolean>(false);
  const [isMobileSidebarOpen, setisMobileSidebarOpen] = useState<boolean>(true);
  const [hideUnhide, sethideUnhide] = useState<boolean>(true);
  return (
    <DataContext.Provider value={{ hide, sethide , SchoolName, setSchoolName ,roleType,
     setroleType,OutletMyschool, setOutletMyschool ,userData,setuserData,loginMassage, 
     setloginMassage,massegeLogout, setmassegeLogout ,isMobileSidebarOpen, setisMobileSidebarOpen
     ,hideUnhide, sethideUnhide
     }}>
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
