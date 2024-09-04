import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultlayout";
import SignUp from "../componets/form/signup";
import Login from "../componets/form/login";
import Home from "../home";
import Authroute from "./autroute";

const router = createBrowserRouter([
    {
        path: '/signup',
        element: (
            <Authroute>
                <SignUp />
            </Authroute>
        ),
    },
    {
        path: '/login',
        element: (
            <Authroute>
                <Login />
            </Authroute>
        ),
    },
    {
        path: '/',
        element: (
            <Authroute>
                <DefaultLayout />
            </Authroute>
        ),  
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'about',
                element: <h1>About</h1>,
            }
        ],
    },
    {
        path: '*',
        element: <h1>404 Error!</h1>,
    },
]);

export default router;