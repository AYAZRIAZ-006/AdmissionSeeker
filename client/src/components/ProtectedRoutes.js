import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

 const PrivateRoute = ({component: Component, ...rest}) => {
    const { isLoggedIn } = useSelector(state=>state.auth)
    const [isLoading, setIsLoading] = useState(true);
    console.log("in orotected isLoggedIn");
    useEffect(() => {
      const checkAuthentication = () => {
        setIsLoading(false);
      };
      checkAuthentication();
    }, []);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    return(
      isLoggedIn ? <Outlet/> : <Navigate to="/" />
  )}

  export default PrivateRoute