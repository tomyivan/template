import { useState } from "react";
import { Home, FormInput, BoxIcon, Circle, AlarmCheck } from "lucide-react";

export const BodySidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <ul
            role="body"
            className="flex flex-col text-gray-700 overflow-y-auto flex-grow h-0"
        >
            <li className="flex flex-row gap-4 h-[56px] font-semibold items-center p-2 hover:bg-teal-100 hover:text-teal-600 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
                <div role="icon">
                    <Home />
                </div>
                <span>Inicio</span>
            </li>
            <li className="flex flex-row gap-4 h-[56px] font-semibold items-center p-2 hover:bg-teal-100 hover:text-teal-600 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
                <div role="icon">
                    <FormInput />
                </div>
                <span>Formularios</span>
            </li>
            <li 
                onClick={toggleDropdown}
                className="flex flex-row gap-4 h-[56px] font-semibold items-center p-2 hover:bg-teal-100 hover:text-teal-600 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
                <div role="icon">
                    <BoxIcon />
                </div>
                <span>Componentes</span>
            </li>
            <li
                role="sub-group"
                className="w-[207px] flex flex-col justify-end ps-8"
            >               
                <ul
                    className={`w-[175px] overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                        isDropdownOpen ? "max-h-[200px]" : "max-h-0"
                    }`}
                >
                    <li className="flex flex-row gap-4 h-[40px] font-semibold items-center p-2 hover:bg-teal-100 hover:text-teal-600 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
                        <div role="icon">
                            <Circle />
                        </div>
                        <span>Subgrupo</span>
                    </li>
                    <li className="flex flex-row gap-4 h-[40px] font-semibold items-center p-2 hover:bg-teal-100 hover:text-teal-600 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
                        <div role="icon">
                            <Circle />
                        </div>
                        <span>Subgrupo 1</span>
                    </li>
                </ul>
            </li>
            <li className="flex flex-row gap-4 h-[56px] font-semibold items-center p-2 hover:bg-teal-100 hover:text-teal-600 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
                <div role="icon">
                    <AlarmCheck />
                </div>
                <span>Alertas</span>
            </li>
        </ul>
    );
};