import React from 'react'
import "./Popup.css"
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { EMPLOYEE_ACTION_TYPES } from '../../store/employee/employee.types'

interface popupprops{
  setPopup:  React.Dispatch<React.SetStateAction<boolean>>
  id:string
}

const Popup = ({setPopup,id}:popupprops) => {
  
  const dispatch=useDispatch()
  return (
    <div className="popup-container">
      <div className="popup-box">
        <div className="popup-title">
          Are you sure ?
        </div>
        <div className="popup-subtitle">
          Do you really want to delete employee ?
        </div>
        <div className="popup-btns">
          <Button onClick={()=>{
            dispatch({type:EMPLOYEE_ACTION_TYPES.DELETE,payload:id})
            setPopup(false)
          }} variant={"primary"}>Confirm</Button>
          <Button onClick={()=>{
            setPopup(false)
          }} variant={"secondary"}>Cancel</Button>
        </div>
      </div>
    </div>
  )
}

export default Popup