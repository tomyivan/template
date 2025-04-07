import { Outlet } from "react-router-dom";
import { Header, NavBar, SideBar } from "../components";
import { useEffect } from "react";

export const MainLayout = () => {
    useEffect(() => {
        const html = document.querySelector('html')
        const theme = localStorage.getItem('theme')
        theme === 'dark' ? html?.classList.add('dark') : html?.classList.remove('dark')
    }
    , [])
    return (
        <>
            <div className="main-layout">
                <SideBar />
                <div className="main-layout__body">                   
                    <NavBar />                    
                    <Header />
                    <Outlet />
                </div>
            </div>

        </>
    );
}