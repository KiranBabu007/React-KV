import React from 'react'
import "./InfoCard.css"

const InfoCard = ({title,children}:{title:string,children:React.ReactNode}) => {
  return (
    <div className="infocard-container">
        <div className="info-title">
            <span>{title}</span>
        </div>
        {
            children
        }
    </div>
  )
}

export default InfoCard