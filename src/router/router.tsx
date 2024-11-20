import { createBrowserRouter } from "react-router-dom";
import Home from "../views/pages/Home"
import Admin from "../views/pages/Admin";
import PageNotFound from "../views/pages/PageNotFound";

// App router 
const router = createBrowserRouter([
    {path:'/', element:<Home/>},
    {path:'/admin', element:<Admin/>},
    {path:'*', element:<PageNotFound/>}
])

export default router