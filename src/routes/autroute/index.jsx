import { Navigate, useLocation } from "react-router-dom";

const Authroute = ({children}) => {
    const location = useLocation();
    console.log(location)
    const isSignup = localStorage.getItem("issignUp") === 'true';
    const isLogin = localStorage.getItem("IsLogin") === 'true' ;

    if (location.pathname === '/signup' && isSignup) {
        return <Navigate to="/login" />;
    }  
    if (location.pathname === '/login' && isLogin) {
        return <Navigate to="/" />;
    }
    if (location.pathname === '/' && !isSignup) {
        return <Navigate to="/signup" />;
    }
    if (location.pathname === '/' && !isLogin) {
        return <Navigate to="/login" />;
    }

    return children;
} 

export default Authroute