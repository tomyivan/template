import { LogOut, Settings, Bell, Sun, Moon } from "lucide-react"
export const NavBar = () => {
    const handleTheme = () => {
        const html = document.querySelector('html')
        if (html) {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark')
                localStorage.setItem('theme', 'light')
            } else {
                html.classList.add('dark')
                localStorage.setItem('theme', 'dark')
            }
        }
    }
    return (
        <nav className="navbar__container">
            <ul className="navbar__list">
                <li className="navbar__list-item"
                    onClick={handleTheme}
                >
                    <Sun size={15} className="dark:hidden" />
                    <Moon size={15} className="hidden dark:block" />
                </li>
                <li className="navbar__list-item"><Bell size={15} /></li>
                <li className="navbar__list-item"><Settings size={15} /></li>
                <li className="navbar__list-item"><LogOut size={15} /></li>
            </ul>
        </nav>
    )
}