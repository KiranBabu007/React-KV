
import HeaderCard from '../../components/HeaderCard/HeaderCard'
import './EmployeeDetails.css'
import HeaderButton from '../../components/HeaderButton/HeaderButton'
import InfoCard from '../../components/InfoCard/InfoCard'
import { data } from '../../data/empdetails'
import { useNavigate, useParams } from 'react-router-dom'



const EmployeeDetails = () => {
  const {id}=useParams()
  const navigate=useNavigate()

  const emp_data=data.find((data)=> data.emp_id == id
  )
    
  return (
    <div className="emp-details-container">
   <div className="emp-details-header">
     <HeaderCard title='Employee Details' endAdornment={<HeaderButton onClick={()=>{
      navigate(`/employee/edit/${emp_data?.emp_id}`)
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
           {emp_data?.Joining_date}
        </span>
        </>
      } />
      
      <InfoCard title="Experience" children={
        <>
        <span className='info-span'>
         {emp_data?.Experience} Yrs
        </span>
        </>
      } />
      <InfoCard title="Role" children={
        <>
        <span className='info-span'>
         {emp_data?.Role}
        </span>
        </>
      } />
      <InfoCard title="Status" children={
        <>
        <span className={`sts-btn-info status-btn-${emp_data?.Status.toLowerCase()}`}>{emp_data?.Status}</span>
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
          No.C -9 T.V.K Industrial Estate,
        </span>
        <span className='info-span'>
          Edappally,Kochi
        </span>
        <span className='info-span'>
          Kerala 60032
        </span>
        </>
      } />
      <InfoCard title="Employee ID" children={
        <>
        <span className='info-span'>
          {emp_data?.emp_id}
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
      
    </div>
   </div>
    </div>
  )
}

export default EmployeeDetails