import { Outlet } from "react-router-dom";
import { NavBar, SideBar } from "../components";

export const MainLayout = () => {
    return (
        <>
            <div className="w-screen h-screen flex flex-row bg-gray-100 bg-teal-50">
                <SideBar />
                <NavBar />
            </div>

        </>
    );
}