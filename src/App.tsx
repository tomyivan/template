
// import './App.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./ui/routes/routes"
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc';
import "dayjs/locale/es"; // Opcional: para internacionalización
import customParseFormat from "dayjs/plugin/customParseFormat"
dayjs.extend(customParseFormat);
dayjs.locale("es")
dayjs.extend(utc);
function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<p>Cargando...</p>} />
    </>
  )
}

export default App
