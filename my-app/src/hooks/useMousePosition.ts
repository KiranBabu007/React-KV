import React, { useState } from 'react'

const useMousePosition = () => {
  const [position,setPosition]=useState({x:0,y:0})
  
    addEventListener("mousemove", (e) => { 
        setPosition({x:e.clientX,y:e.clientY})
    })
        
  return position
}

export default useMousePosition