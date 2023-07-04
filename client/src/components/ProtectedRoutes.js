import { useSelector } from "react-redux"
import { Navigate, Route } from "react-router-dom"


 const PrivateRoute = ({component: Component, ...rest}) => {
    const { isLoggedIn } = useSelector(state=>state.auth)
    
    return(
      <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Navigate to="/" />
      }
    />
  )}

  export default PrivateRoute