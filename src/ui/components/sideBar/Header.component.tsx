import { Atom, CircleArrowLeft } from "lucide-react"
interface HeaderProps {
    title? : string
}
export const Header: React.FC<HeaderProps> = ({
    title = "Template"
}) => {
    return (
        <header className="text-2xl font-bold text-center flex flex-row items-center justify-center gap-2 h-[78px] relative">                
            <div>
                <Atom className="text-blue-500" size={30} /> 
                {/* icono */}
            </div>
            <h1 >{title}</h1>
            <div className="absolute w-[30px] h-[30px] bg-teal-300 text-gray-700 cursor-pointer active:rotate-180 transition-transform duration-300 ease-in-out -right-8 rounded-full">
                <CircleArrowLeft size={30} />
            </div>
        </header>
    )
}