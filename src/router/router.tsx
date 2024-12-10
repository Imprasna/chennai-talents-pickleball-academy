import { createBrowserRouter } from "react-router-dom";
import Home from "../views/pages/Home"
import Admin from "../views/pages/Admin";
import PageNotFound from "../views/pages/PageNotFound";
import Team from "../views/features/team/Team";

// App router 
const router = createBrowserRouter([
    {path:'/', element:<Home/>},
    {path:'/team', element:<Team/>},
    {path:'/admin', element:<Admin/>},
    {path:'*', element:<PageNotFound/>}
])

export default router