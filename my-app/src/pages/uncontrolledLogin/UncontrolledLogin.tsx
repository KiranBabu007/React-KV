import "./Login.css";
import Button from "./Button";
import { useRef, useEffect } from "react";
import kvLogo from "../../../public/kv-logo.png"
import kvLoginImg from "../../../public/kv-login.jpeg";

import LoginInput from "./LoginInput";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const clearRef = useRef<HTMLButtonElement | null>(null);


  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  const handleNativeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formdata = new FormData(form)
    const username = formdata.get("username") as string;
    const password = formdata.get("password") as string;
  }

  const updateClearButton = () => {
    if (usernameRef.current) {
      if (usernameRef.current.value.length > 0) {
        if (clearRef.current) {
          clearRef.current.disabled = false
          clearRef.current.onclick = clearUsername
        }
      } else {
         if (clearRef.current){
          clearRef.current.disabled = true
         }
        
      }
    }
  }
  const clearUsername = () => {
    if (usernameRef.current) {
      usernameRef.current.value = ''
      if (clearRef.current)
        clearRef.current.disabled = true
    }


  }

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
          <form onSubmit={handleNativeSubmit}>
            <LoginInput
              id="login-username-input"
              label="Username"
              ref={usernameRef}
              onChange={updateClearButton}
              endAdornment={
                <button disabled type="button" ref={clearRef} onClick={clearUsername}>Clear</button>
              }

            />

            <LoginInput id="login-password-input" label="Password" />

            <Button variant="primary" className="login-button">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;