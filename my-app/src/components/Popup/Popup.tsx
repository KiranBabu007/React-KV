import React from 'react'
import "./Popup.css"
import Button from '../Button/Button'

interface popupprops{
  setPopup:  React.Dispatch<React.SetStateAction<boolean>>
}

const Popup = ({setPopup}:popupprops) => {
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