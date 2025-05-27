import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Pedidos from "../pages/Pedidos"
import Middleware from "../middleware/Middleware"
import DashBoard from "../pages/Dashboard"

function App() {

    const publicRoutes = [
        {
            path: "/produtos",
            component: <Login/>
        },

    ]
    const guestRoutes = [
        {
            path: "/",
            component: <Login/>
        },
        {
            path: "/login",
            component: <Login/>
        },
        {
            path: "/register",
            component: <Register/>
        }
    ]

    const privateRoutes = [
        {
            path: "/dashboard",
            component: <DashBoard/>
        },
        {
            path: "/pedidos",
            component: <Pedidos/>
        }
    ]


  return (




    <>
    <BrowserRouter>
        <Routes>
            {publicRoutes.map(route => <Route path={route.path} element={<Middleware routeType="public">{route.component}</Middleware>}></Route>)}
            {guestRoutes.map(route => <Route path={route.path} element={<Middleware routeType="guest">{route.component}</Middleware>}></Route>)}
            {privateRoutes.map(route => <Route path={route.path} element={<Middleware routeType="private">{route.component}</Middleware>}></Route>)}
        </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App
