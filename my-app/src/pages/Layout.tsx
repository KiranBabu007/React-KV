import SideNav from "../components/sideNav/SideNav"
import "./Layout.css"



const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="layout">
        <SideNav />
        {children}
    </div>
  )
}

export default Layout