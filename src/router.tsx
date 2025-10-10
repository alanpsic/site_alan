import {createBrowserRouter} from 'react-router-dom'
import { Home } from './pages/home'
import { Artigo } from './pages/artigo'
import { NotFound } from './pages/erro404'
import { Login } from './pages/login'
import { Admin } from './pages/admin'

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/artigo/:tema",
        element: <Artigo/>
    },
    {
        path:"/login",
        element: <Login/>
    }
    ,
    {
        path:"/admin",
        element: <Admin/>
    }
    ,
    {
        path:"*",
        element: <NotFound/>
    }
])

export default router;