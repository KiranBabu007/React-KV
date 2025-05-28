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
          <a>Employee List</a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
