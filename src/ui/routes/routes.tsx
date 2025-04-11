import { createBrowserRouter, redirect } from "react-router-dom";
import { HomePage, ErrorPage, FormPage, InputsPage, ButtonsPage, TablePage, ModalPage, AlertPage } from "../pages";
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
            },{
                path: "/formularios",
                element: <FormPage />,
            },{
                path: "/componentes/inputs",
                element: <InputsPage />,
            },{
                path: "/componentes/botones",
                element: <ButtonsPage />,
            },{        
                path: "/componentes/modal",
                element: <ModalPage />
            },{
                path: "/componentes/alerta",
                element: <AlertPage />,
            },{
                path: "/tablas",
                element: <TablePage />,
            }
        ]
    }
],{
    basename: "/template/",
})