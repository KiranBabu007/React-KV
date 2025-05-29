import React, { type MouseEventHandler } from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import './HeaderButton.css'
import { IoAdd } from 'react-icons/io5'

const HeaderButton = ({onClick,label}:{onClick?:MouseEventHandler
  ,label:string}) => {
  return (
    <div onClick={onClick} className="header-btn-container">
      {label=="Edit" &&  <button><MdOutlineModeEditOutline className='edit-icn' /></button>}
      {label=="Create Employee" &&  <button><IoAdd className='edit-icn' /></button>}
        
        <span>{label}</span>
    </div>
  )
}

export default HeaderButton