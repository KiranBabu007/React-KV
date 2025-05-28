import { Outlet, useNavigate } from "react-router-dom"
import SideNav from "../components/sideNav/SideNav"
import "./Layout.css"



const Layout = () => {

   const isLoggedIn = () => {
  return localStorage.getItem("loggedIn") == "true";
};
const navigate=useNavigate()

  if(!isLoggedIn){
 navigate("/login")
 
}
  return (
    <div className="layout">
        <SideNav />
        <Outlet />
    </div>
  )
}

export default Layout