import { Outlet, useNavigate } from "react-router-dom"
import SideNav from "../components/sideNav/SideNav"
import "./Layout.css"
import Button from "../components/Button/Button";




const Layout = () => {

  const isLoggedIn = () => {
    return localStorage.getItem("loggedIn") == "true";
  };
  const navigate = useNavigate()

  if (!isLoggedIn) {
    navigate("/login")

  }
  return (
    <div className="layout">
      <SideNav />
       <div className="logout-btn">
        <Button onClick={()=>{
          localStorage.setItem("loggedIn","false")
          navigate("/login")
        }} variant="primary">Logout</Button>
       </div>
        <Outlet />
      
    </div>
  )
}

export default Layout