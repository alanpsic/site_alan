import {createBrowserRouter} from 'react-router-dom'
import { Home } from './pages/home'
import { Artigo } from './pages/artigo'
import { NotFound } from './pages/erro404'

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
        path:"*",
        element: <NotFound/>
    }
])

export default router;