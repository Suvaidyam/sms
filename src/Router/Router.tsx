import { FC, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Auth/Login/Login';
import Home from '../Home/Home';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Student from '../Pages/Student/Student';
import Teacher from '../Pages/Teacher/Teacher';



interface RouterProps { }

const Router: FC<RouterProps> = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                    <Route path='/home' element={<Home />}>

                        <Route path='dashboard' element={<Dashboard/>}/>
                        <Route path='student' element={<Student/>}/>
                        <Route path='teacher' element={<Teacher/>}/>

                    <Route/>
                </Route>
            </Routes>
        </>
    );
}

export default Router;