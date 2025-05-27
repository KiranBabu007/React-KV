import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import "./LoginRight.css";
import useMousePosition from "../../hooks/useMousePosition";
import LoginInput from "../LoginInput/LoginInput";

const LoginRight = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [uexceeded, setExceededu] = useState(false);
  const [pexceeded, setExceededp] = useState(false);

  const userRef = useRef<HTMLInputElement>(null);

  const position = useMousePosition();

  useEffect(() => {
    if (name.length >= 10) {
      setExceededu(true);
    } else {
      setExceededu(false);
    }
    if (password.length >= 10) {
      setExceededp(true);
    } else {
      setExceededp(false);
    }
  }, [name, password]);

  useEffect(() => {
    if (userRef.current) {
      userRef.current?.focus();
    }
  }, []);

  return (
    <div className="right">
      <div className="container">
        <div className="login-logo">
          <img src="./kv-logo.png" alt="" />
        </div>

        <div className="form">
          <LoginInput
            id="username"
            label="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={userRef}
            endAdornment={
              <Button
                variant="secondary-clear"
                onClick={() => setName("")}
              >
                Clear
              </Button>
            }
          />

          {uexceeded && <p>Username Length Exceeded</p>}

          <LoginInput
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {pexceeded && <p>Password Length Exceeded</p>}
        </div>

        <div>
          <Button variant="primary-login">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginRight;