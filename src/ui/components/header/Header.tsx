import { useLocation } from "react-router-dom"
import {  useEffect, useState } from "react";
import { SideBarContent } from "../sideBar/Content";
export const Header = () => {
    const location = useLocation();
    const [ title, setTitle ] = useState<string>('')
    const [ navigation, setNavigation ] = useState<{
        label: string,
        link?: string
    }[]>([])
    useEffect(() => {
        const path = location.pathname.split('/').filter((item) => item !== '');
        console.log(path)
        const newTitle = path.length > 0 ? path[path.length - 1] : 'Inicio';
        setTitle(newTitle.charAt(0).toUpperCase() + newTitle.slice(1));
        for( const item of SideBarContent()){
            if (item.link === location.pathname) {
                setNavigation([{ label: item.title, link: item.link }])
            }
            if (item.subItems) {
                for (const subItem of item.subItems) {
                    if (subItem.link === location.pathname) {
                        setNavigation([
                            { label: item.title, link: item.link },
                            { label: subItem.title, link: subItem.link }
                        ])
                    }
                }
            }
        }
        console.log(navigation);
    }
    , [location.pathname]);
    return (
        <ul className="flex flex-row gap-4 items-center justify-between h-[27px] my-4 text-gray-700">
            <li className="text-2xl font-bold ">{title}</li>
            <li>
                <ul className="flex flex-row gap-2 items-center ">
                    {
                        navigation.map((item, index) => (
                            <li key={index} className="flex flex-row gap-2 items-center">
                                <span className="text-teal-600"> {item.label}</span>
                            </li>
                        ))
                    }
                </ul>
            </li>
        </ul>
    )
}