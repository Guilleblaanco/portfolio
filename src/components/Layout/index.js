import './index.scss'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
//import { motion } from 'framer-motion';


const Layout = () => {
    return (
        <>
            <div className='App'>
                <Sidebar />
                <div className='page'>
                    <Outlet />
                </div>
            </div>
        </>
    );

}

export default Layout;