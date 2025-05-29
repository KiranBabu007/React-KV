import { Link } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="sidebar">
      <div className="side-logo">
        <img src="/kv-logo.png" alt="$" />
      </div>

      <div className="sidenav-btn-container"> 
        <div className="emp-button">
          <img src="/icon.svg" alt="" />
          <Link to="/employee" >Employee List</Link>
        </div>

        <div className="emp-button">
          <img src="/icon.svg" alt="" />
          <Link to="/employee/create" >Create Employee</Link>
        </div>

        <div className="emp-button">
          <img src="/icon.svg" alt="" />
          <Link to="/employee/edit" >Edit Employee</Link>
        </div>

        
      </div>
    </div>
  );
};

export default SideNav;
