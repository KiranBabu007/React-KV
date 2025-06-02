import { Navigate, Outlet, useNavigate } from "react-router-dom"
import SideNav from "../components/sideNav/SideNav"
import "./Layout.css"
import Button from "../components/Button/Button";




const Layout = () => {

  const isLoggedIn = () => {
    return localStorage.getItem("loggedIn") === "true";
  };
  const navigate = useNavigate()

  if (!isLoggedIn()) {
    return <Navigate to="/login"/>
 


  }
  return (
    <div className="layout">
      <SideNav />
       <div className="logout-btn">
        <Button onClick={()=>{
          localStorage.setItem("loggedIn","false")
          localStorage.removeItem("token")
          navigate("/login")
        }} variant="primary">Logout</Button>
       </div>
        <Outlet />
      
    </div>
  )
}

export default Layout