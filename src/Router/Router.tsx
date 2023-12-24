import { FC, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Auth/Login/Login';
import Home from '../Home/Home';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Student from '../Pages/Student/Student';
import Teacher from '../Pages/Teacher/Teacher';
import Register from '../Auth/Register/Register';
import SchoolRegister from '../Pages/SchoolRegister/SchoolRegister';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import Protected from './Protected';
import SchoolPage from '../Pages/YourSchools/SchoolPage'
import Myschools from '../Pages/YourSchools/Myschools/Myschools';
// import Profile from '../Pages/Profile/Profile';


interface RouterProps { }

const Router: FC<RouterProps> = () => {
    return (
        <>
            
            <Routes>
                <Route path='/' element={<Login />} />

                <Route path='/home' element={<Protected Component={Home} />}>

                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='student' element={<Student />} />
                    <Route path='teacher' element={<Teacher />} />
                    {/* <Route path='profile' element={Profile}/> */}

                    <Route path='registerpage' element={<RegisterPage />}>
                        <Route path='register' element={<Register />} />
                    </Route>
                    
                    <Route path='schoolregister' element={<SchoolRegister />} />
                    <Route path='schoolpage' element={<SchoolPage />} >
                        <Route path='myschool' element={<Myschools />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default Router;