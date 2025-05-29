import React, { type ChangeEventHandler } from 'react'
import "./UserInput.css"

const UserInput = ({label,placeholder,type,disable=false,className,value,onChange}:{label:string,placeholder:string,type:string,disable?:boolean,className?:string,value?:string,onChange:ChangeEventHandler<HTMLInputElement>}) => {
  return (
    <div className="details">
        <label htmlFor="name">{label}</label>
        <input onChange={onChange} value={value} className={`${className}`} disabled={disable} type={`${type}`} id="name" placeholder={`${placeholder}`} />
    </div>

  )
}

export default UserInput