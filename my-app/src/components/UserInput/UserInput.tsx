import React from 'react'

const UserInput = ({label,placeholder,type}:{label:string,placeholder:string,type:string}) => {
  return (
    <div className="details">
        <label htmlFor="name">{label}</label>
        <input type={`${type}`} id="name" placeholder={`${placeholder}`} />
    </div>

  )
}

export default UserInput