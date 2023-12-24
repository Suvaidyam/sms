import React, { FC, useEffect } from 'react';
import { useNavigate ,Route} from 'react-router-dom';
// import Home from '../Home/Home';
interface ProtectedProps {
    Component: React.ComponentType<any>;
}

const Protected: FC<ProtectedProps> = (props) => {
    const {Component} = props;
    const navigate = useNavigate()
    const token = sessionStorage.getItem("token");
   useEffect(()=>{
    if (!token) {
        navigate('/')
    }
   },[token,navigate])
    return (
        <> 
            <Component/>
        </>
    );
}

export default Protected;
