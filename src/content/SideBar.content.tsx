import { Box, Component, FormInput, Home, Table2 } from "lucide-react"
import { SideBarList } from "../domain"
import dayjs from "dayjs"
 const date =  {
        start: dayjs(`${dayjs().format('YYYY-MM')}-01`),
        end: dayjs(`${dayjs().endOf('month')}`)
}
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
            {
                title: 'Modal',
                icon: <Component />,
                link: '/componentes/modal',
            },
        ]
    },
{
        title: 'Tablas',
        icon: <Table2 />,
        link: '/tablas',
        query: `?de=${date.start.format('YYYY-MM-DD')}&hasta=${date.end.format('YYYY-MM-DD')}`,
    },
]