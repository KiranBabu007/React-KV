import React from 'react'
import HeaderCard from '../../components/HeaderCard/HeaderCard'



const Employee = () => {
  return (
    <div>
      <div className="main">
      <div className="header-container">
        <HeaderCard title="Employee" endAdornment={<div className='employee-functions'>
       <label>Filter By</label> 
        <select name={status} id={status} defaultValue="Status">
        <option value="Status">Status </option>
        
      
      </select> 
      <button className='create-button'>Create Employee</button>
       </div>
    } />
      </div>
      
    </div>
    </div>
  )
}

export default Employee