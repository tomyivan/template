
// import './App.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./ui/routes/routes"
function App() {

  return (
    <>
      <RouterProvider router={router} fallbackElement={<p>Cargando...</p>} />
    </>
  )
}

export default App
