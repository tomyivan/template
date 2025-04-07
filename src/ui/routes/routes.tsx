import { createBrowserRouter, redirect } from "react-router-dom";
import { HomePage, ErrorPage } from "../pages";
import { MainLayout } from "../layout/Main.layout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            }
        ]
    }
],{
    basename: "/template/",
})