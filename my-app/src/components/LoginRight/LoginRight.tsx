import Button from "../Button/Button"
import "./LoginRight.css"


const LoginRight = () => {
  return (
    <div className="right">
        <div className="container">

        <div className="logo">
          <img src="./kv-logo.png" alt="" />
        </div>

        <div className="form">
          <div className="username">
            <label >Username</label>
            <input type="text" />
          </div>

          <div className="password">
            <input type="text" placeholder="Password" />
          </div>

        </div>
        <div >
            <Button variant="btn-primary">Login</Button>
        </div>
        
    </div>
    </div>
  )
}

export default LoginRight