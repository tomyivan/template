import { BoxIcon, BusFront, Circle, FormInput, Home, User } from "lucide-react"
import { Header } from "./Header.component"
import { BodySidebar } from "./Body.components"

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = () => {
    return (
        <div className="h-screen w-[240px] shadow-xl flex flex-col gap-2 p-4 text-gray-700">
            <Header title="Template" />
            <BodySidebar   />
            <footer className="shadow-lg rounded-lg ">
                <div className="flex flex-row items-center gap-4 p-2 text-gray-700 h-[49px] cursor-pointer border border-teal-400 rounded-xl">
                    <div role="icon">
                        <User />
                    </div>
                    <span>Juan Perez</span>
                </div>
            </footer>
        </div>
    )
}