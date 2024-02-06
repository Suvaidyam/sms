import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/home';
import Footer from './Footer';

interface RouterHomeProps {}

const RouterHome: FC<RouterHomeProps> = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} /> 
        </Routes>
        <Footer/>
        </>
    );
}

export default RouterHome;
