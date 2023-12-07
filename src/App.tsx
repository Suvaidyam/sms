import React, { useEffect } from 'react';
// import logo from './logo.svg';
import SchoolRegistrationForm from './components/SchoolRegistrationForm ';  
import AdminLogin from './components/Admin/AdminLogin';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from './components/HomePage';
import Navbar from '../src/components/Navbar';
// import MYschools from './components/MYschools';
import AdminHome from './components/Admin/AdminHome';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminUser from './components/Admin/AdminUser';
import './App.css';
import { MyProvider } from './MyContext';
import { useMyContext } from './MyContext';
import StudentRegistration from './components/StudentRegistration';
import Students from './components/Students';
import MYschools from './components/MYschools';
import DashboardSideMenu from './components/Admin/DashboardSideMenu';


function App() {
  const { hidemainNavbar} = useMyContext();
  const login = localStorage.getItem('AdminLoginData');
  const navigate = useNavigate()
  useEffect(()=>{
      if(!login){
          navigate('/')
      }
  },[login])

  return (
    <>

    
        
      <Routes>
          <Route path="/" element={<AdminHome/>} />
               
          <Route path='DashboardSideMenu' element={<DashboardSideMenu/>}/>
          <Route path='AdminDashboard' element={login && <AdminDashboard/>}>
              <Route path="AdminUser" element={<AdminUser/>} />
              <Route path="SchoolRegistrationForm" element={<SchoolRegistrationForm/>} />
          </Route>
       
          
        
      </Routes>
    
    </>
  );
}

export default App;
