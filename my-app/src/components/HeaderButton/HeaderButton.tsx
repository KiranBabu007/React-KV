import React from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import './HeaderButton.css'

const HeaderButton = ({label}:{label:string}) => {
  return (
    <div className="header-btn-container">
        <button><MdOutlineModeEditOutline className='edit-icn' /></button>
        <span>{label}</span>
    </div>
  )
}

export default HeaderButton