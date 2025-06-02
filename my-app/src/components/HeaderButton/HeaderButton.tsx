import React, { type MouseEventHandler } from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import './HeaderButton.css'
import { IoAdd } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'

const HeaderButton = ({onClick,label}:{onClick?:MouseEventHandler
  ,label:string}) => {
    const {id}=useParams()
    const navigate=useNavigate()

  return (
    <div onClick={onClick} className="header-btn-container">
      {label=="Edit" &&  <button><MdOutlineModeEditOutline onClick={()=>{navigate(`/employee/edit/${id}`)}} className='edit-icn' /></button>}
      {label=="Create Employee" &&  <button><IoAdd className='edit-icn' /></button>}
        
        <span>{label}</span>
    </div>
  )
}

export default HeaderButton