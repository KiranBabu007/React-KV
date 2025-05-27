import React, { useState } from 'react'
import Button from '../Button/Button'
import './Counter.css'

const Counter = () => {
    const [count,setCount]=useState(0)

  return (
    <div>
        
        <div className="counter">
            <h1>Counter</h1>
            <div className="value" >{count}</div>
            <div className="counter-btn">
                <Button variant="primary" onClick={()=>{
                    setCount(count+1)
                }}>Increase</Button>
                <Button variant="primary" onClick={()=>{
                    setCount(count-1)
                }} >Decrease</Button>
            </div>
        </div>
    </div>
  )
}

export default Counter