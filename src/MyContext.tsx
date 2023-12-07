// MyContext.tsx
import React, { createContext, useContext, useState,useEffect, Dispatch, SetStateAction } from 'react';

interface MyContextType {
  user: string;
  updateUser: (newUser: string) => void;
  inputs: string[];
  setInputs: Dispatch<SetStateAction<string[]>>;
  userEmail: string | null; 
  setUserEmail: Dispatch<SetStateAction<string | null>>; 
  isEditMode: boolean; 
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
  hidemainNavbar:string | null;
  sethidemainNavbar:Dispatch<SetStateAction<string | null>>;
  filter :string | null;
  setfilter:Dispatch<SetStateAction <string | null>>
  schoolname :string | '';
  setschoolname:Dispatch<SetStateAction <string | ''>>
  AdminHideBlock:string | '';
  setAdminHideBlock:Dispatch<SetStateAction <string | ''>>
  AdminHideBlock2:string | '';
  setAdminHideBlock2:Dispatch<SetStateAction <string | ''>>
  mobilemenuHB:string | '';
  setmobilemenuHB:Dispatch<SetStateAction <string | ''>>
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hidemainNavbar, sethidemainNavbar] = useState<string | null>('hidden');
  const [filter, setfilter] = useState<string | null>('');
  const [user, setUser] = useState<string>('');
  const [inputs, setInputs] = useState<string[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false || Hello());
  const [userEmail, setUserEmail] = useState<string | null>(logiData());
  const [schoolname, setschoolname] = useState<string>('');
  const [AdminHideBlock, setAdminHideBlock] = useState('block');
  const [AdminHideBlock2, setAdminHideBlock2] = useState('hidden');
  const [mobilemenuHB, setmobilemenuHB] = useState('hidden')
  const updateUser = (newUser: string) => {
    setUser(newUser);
  };
  

function logiData() {
    const userEmail = localStorage.getItem('userEmail');
    return userEmail ? JSON.parse(userEmail) : null ;
  }
  function getStoredSingle() {
    const storedSingle = localStorage.getItem('mySingleData');
    return storedSingle ? JSON.parse(storedSingle) : null ;
  }
  function Hello() {
    const isEditMode = localStorage.getItem('isEditMode');
    return isEditMode ? JSON.parse(isEditMode) : null ;
  }

  return (
    <MyContext.Provider value={{ user, updateUser, inputs, setInputs, userEmail, setUserEmail ,
    isEditMode, setIsEditMode,hidemainNavbar ,sethidemainNavbar ,filter,setfilter,
    schoolname,setschoolname ,AdminHideBlock, setAdminHideBlock ,AdminHideBlock2, setAdminHideBlock2 ,mobilemenuHB, setmobilemenuHB
    }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
