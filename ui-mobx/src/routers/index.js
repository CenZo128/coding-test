import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/login",
        exact: true,
        component: Login
    },
    {
        path: "/register",
        exact: true,
        component: Register
    },
    
];

export default routes