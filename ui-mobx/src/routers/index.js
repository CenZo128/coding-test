import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Transaction from '../pages/Transaction'
import Profile from '../pages/Profile'

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/cart",
        exact: true,
        component: Cart
    },
    {
        path: "/transaction",
        exact: true,
        component: Transaction
    },
    {
        path: "/profile",
        exact: true,
        component: Profile
    },
    
];

export default routes