import { useEffect, useRef, useState } from "react"
import Button from "../Button/Button"
import "./LoginRight.css"
import useMousePosition from "../../hooks/useMousePosition"


const LoginRight = () => {
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [uexceeded,setExceededu]=useState(false)
  const [pexceeded,setExceededp]=useState(false)

  const userRef=useRef<HTMLInputElement>(null)
  
  const position=useMousePosition()

  useEffect(()=>{
    if(name.length >=10){
      // alert('max char reached')
      setExceededu(true)
    }
    else{
      setExceededu(false)
    }
     if(password.length >=10){
      // alert('max char reached')
      setExceededp(true)
    }
    else{
      setExceededp(false)
    }
    
  },[name,password])

  useEffect(()=>{
    if(userRef.current){
      userRef.current?.focus()
    }
    
  },[])
  
  
  return (

    <div className="right">
        <div className="container">
          {/* <h3>Mouse Position</h3>
          <p>{position.x}</p>
          <p>{position.y}</p> */}


        <div className="login-logo">
          <img src="./kv-logo.png" alt="" />
        </div>

        <div className="form">
          <div className="username">
                   
            <input name="username" ref={userRef} onChange={(e)=>{setName(e.target.value) } } type="text" value={name} /> 
             <Button  variant="secondary-clear"  onClick={()=>{setName('')}} >Clear</Button>
            <label className="userlabel"  htmlFor="username"  >Username</label>        
          </div>

          { uexceeded &&
            <p >Username Length Exceeded</p>}

          <div className="password">
            <input  onChange={(e)=>{setPassword(e.target.value)}} type="password" value={password}  placeholder="Password" />
          </div>

           { pexceeded &&
            <p >Password Length Exceeded</p>}

        </div>
        <div >
            <Button  variant="primary-login">Login</Button>
        </div>
        
    </div>
    </div>
  )
}

export default LoginRight