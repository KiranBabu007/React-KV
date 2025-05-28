import { Outlet } from "react-router-dom"
import SideNav from "../components/sideNav/SideNav"
import "./Layout.css"



const Layout = () => {
  return (
    <div className="layout">
        <SideNav />
        <Outlet />
    </div>
  )
}

export default Layout