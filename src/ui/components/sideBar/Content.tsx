import { Box, FormInput, Home } from "lucide-react"
import { SideBarList } from "../../../domain"
export const SideBarContent= ():SideBarList[]  => [
    {
        title: 'Inicio',
        icon: <Home />,
        link: '/',
    },
    {
        title: 'Formularios',
        icon: <FormInput />,
        link: '/formularios',
    },
    {
        title: 'Componentes',
        icon: <Box />,
        subItems: [
            {
                title: 'Inputs',
                icon: <FormInput />,
                link: '/componentes/inputs',
            },
            {
                title: 'Botones',
                icon: <Box />,
                link: '/componentes/botones',
            },
        ]
    },
{
        title: 'Formularios2',
        icon: <FormInput />,
    },
]