import "./Login.css";
import LoginInput from "./LoginInput";
import { useRef, useEffect } from "react";
import kvLogo from "../../assets/kv-logo.png";
import kvLoginImg from "../../assets/kv-login.jpeg";
import Button from "../../components/Button/Button";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form>
            <LoginInput
              id="login-username-input"
              label="Username"
              ref={usernameRef}
            />

            <LoginInput id="login-password-input" label="Password" />

            <Button type="submit" className="login-button">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;