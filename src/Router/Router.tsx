import { FC, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Auth/Login/Login';





interface RouterProps { }

const Router: FC<RouterProps> = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />

                       

                   
                    

                </Route>

              
            </Routes>
        </>
    );
}

export default Router;