import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderCard from '../../components/HeaderCard/HeaderCard'
import './EmployeeDetails.css'
import HeaderButton from '../../components/HeaderButton/HeaderButton'


const EmployeeDetails = () => {

    
  return (
    <div className="emp-details-container">
   <div className="emp-details-header">
     <HeaderCard title='Employee Details' endAdornment={<HeaderButton label={"Edit"}/>}/>
   </div>
   <div className="emp-info-container">
    <div className="emp-info">
      
    </div>
   </div>
    </div>
  )
}

export default EmployeeDetails