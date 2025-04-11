import { Outlet } from "react-router-dom";
import { Header, NavBar, RightBar, SideBar } from "../components";
import { useEffect, useState } from "react";

export const MainLayout = () => {
    const [showRightBar, setShowRightBar] = useState(false)
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
                <div className="main-layout__body scrollbar-gutter-stable">                   
                    <NavBar 
                        openNotify={() => setShowRightBar(!showRightBar)}
                    />                    
                    <Header />                    
                    <Outlet />
                </div>
                <RightBar 
                    isOpen={showRightBar} 
                    handleHidden={() => setShowRightBar(!showRightBar)}
                />
            </div>

        </>
    );
}