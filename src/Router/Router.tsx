import { FC, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Auth/Login/Login';
import Home from '../Home/Home';
import Student from '../Pages/Student/Student';
import Teacher from '../Pages/Teacher/Teacher';
import Register from '../Auth/Register/Register';
import SchoolRegister from '../Pages/SchoolRegister/SchoolRegister';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import Protected from './Protected';
import SchoolPage from '../Pages/YourSchools/SchoolPage'
import Myschools from '../Pages/YourSchools/Myschools/Myschools';
import Principals from '../Pages/Principals/Principals';
import English from '../Pages/Task/Subjects/English';
import Hindi from '../Pages/Task/Subjects/Hindi';
import Math from '../Pages/Task/Subjects/Math';
import Science from '../Pages/Task/Subjects/Science';
import SocialScience from '../Pages/Task/Subjects/SocialScience';

import TastCard from '../Pages/Task/StudentSide/TastCard'
import TastPage from '../Pages/Task/StudentSide/TaskPage'
import EnglishStudent from '../Pages/Task/StudentSide/subject/EnglishStudent';
import HindiStudent from '../Pages/Task/StudentSide/subject/HindiStudent';
import MathStudent from '../Pages/Task/StudentSide/subject/MathStudent';
import ScienceStudent from '../Pages/Task/StudentSide/subject/ScienceStudent';
import SocialScienceStudent from '../Pages/Task/StudentSide/subject/SocialScienceStudent';
import StRegister from '../Auth/StRegister/StRegiser';
import Dashboard from '../Pages/Dashboard/Dashboard';
interface RouterProps { }

const Router: FC<RouterProps> = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Login />} />

                <Route path='/home' element={<Protected Component={Home} />}>

                    {/* <Route path='superdashboard' element={<SuperAdmin />} /> */}
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='student' element={<Student />} />
                    <Route path='teacher' element={<Teacher />} />

                    <Route path='English' element={<English />} />
                    <Route path='Hindi' element={<Hindi />} />
                    <Route path='Math' element={<Math />} />

                    <Route path='Science' element={<Science />} />

                    <Route path='SocialScience' element={<SocialScience />} />
                    <Route path='principals' element={<Principals />} />

                    {/* Student Side  */}

                    <Route path='EnglishStudent' element={<TastCard Subject={'English'} />} />
                    <Route path='HindiStudent' element={<TastCard Subject={'Hindi'} />} />
                    <Route path='MathStudent' element={<TastCard Subject={'Math'} />} />
                    <Route path='ScienceStudent' element={<TastCard Subject={'Science'} />} />
                    <Route path='SocialScienceStudent' element={<TastCard Subject={'SocailScience'} />} />


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