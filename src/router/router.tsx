import { createBrowserRouter } from "react-router-dom";
import Home from "../views/pages/Home"

// App router 
const router = createBrowserRouter([
    {path:'/', element:<Home/>}
])

export default router