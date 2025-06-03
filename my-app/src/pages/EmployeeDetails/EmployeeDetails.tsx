
import HeaderCard from '../../components/HeaderCard/HeaderCard'
import './EmployeeDetails.css'
import HeaderButton from '../../components/HeaderButton/HeaderButton'
import InfoCard from '../../components/InfoCard/InfoCard'
import { data } from '../../data/empdetails'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { Employee } from '../../store/employee/employee.types'
import { useAppSelector } from '../../store/store'
import { useGetEmployeeQuery } from '../../api-services/employees/employee.api'



const EmployeeDetails = () => {
  const {id}=useParams()
  const {data}=useGetEmployeeQuery({id:id})
  console.log(data)
  const navigate=useNavigate()

  const emp_data=data
    
  return (
    <div className="emp-details-container">
   <div className="emp-details-header">
     <HeaderCard title='Employee Details' endAdornment={<HeaderButton onClick={()=>{
      navigate(`/employee/edit/${data?.id}`)
     }} label={"Edit"}/>}/>
   </div>
   <div className="emp-info-container">
    <div className="emp-info">
      <InfoCard title="Employee Name" children={
        <>
        <span className='info-span'>
          {emp_data?.name}
        </span>
        </>
      } />
      

      <InfoCard title="Joining Date" children={
        <>
        <span className='info-span'>
           {emp_data?.dateOfJoining.toString().slice(0,10)}
        </span>
        </>
      } />
      
      <InfoCard title="Experience" children={
        <>
        <span className='info-span'>
         {emp_data?.experience} Yrs
        </span>
        </>
      } />
      <InfoCard title="Role" children={
        <>
        <span className='info-span'>
         {emp_data?.role}
        </span>
        </>
      } />
      <InfoCard title="Status" children={
        <>
        <span className={`sts-btn-info status-btn-${emp_data?.status.toLowerCase()}`}>{emp_data?.status}</span>
        </>
      } />
      <InfoCard title="Email ID" children={
        <>
        <span className='info-span'>
          {emp_data?.email}
        </span>
     
        </>
      } />
      <InfoCard title="Address" children={
        <>
        
        <span className='info-span'>
          {emp_data?.address.houseNo}
        </span>
        <span className='info-span'>
          {emp_data?.address.line1}
        </span>
        <span className='info-span'>
           {emp_data?.address.line2}
        </span>
        <span className='info-span'>
           {emp_data?.address.pincode}
        </span>
        </>
      } />
      <InfoCard title="Employee ID" children={
        <>
        <span className='info-span'>
          {emp_data?.employeeId}
        </span>
     
        </>
      } />
      <InfoCard title="Age" children={
        <>
        <span className='info-span'>
         {emp_data?.age}
        </span>
     
        </>
      } />
      <InfoCard title="Department" children={
        <>
        <span className='info-span'>
         {emp_data?.department?.name}
        </span>
     
        </>
      } />
      
    </div>
   </div>
    </div>
  )
}

export default EmployeeDetails