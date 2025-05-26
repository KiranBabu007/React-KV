import "./SideNav.css"

const SideNav = () => {
  return (
    <div className="sidebar">
        <div className="side-logo">
          <img src="/kv-logo.png" alt="$" />
        </div>

        <nav>
          <div className="emp-button">
            <img src="./icon.svg" alt="" />
            <a >Employee List</a>
          </div>
        </nav>
    </div>

  )
}

export default SideNav