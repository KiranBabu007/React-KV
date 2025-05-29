
import HeaderCard from '../../components/HeaderCard/HeaderCard'
import './EmployeeDetails.css'
import HeaderButton from '../../components/HeaderButton/HeaderButton'
import InfoCard from '../../components/InfoCard/InfoCard'



const EmployeeDetails = () => {

    
  return (
    <div className="emp-details-container">
   <div className="emp-details-header">
     <HeaderCard title='Employee Details' endAdornment={<HeaderButton label={"Edit"}/>}/>
   </div>
   <div className="emp-info-container">
    <div className="emp-info">
      <InfoCard title="Employee Name" children={
        <>
        <span className='info-span'>
          Vishal M
        </span>
        </>
      } />
      

      <InfoCard title="Joining Date" children={
        <>
        <span className='info-span'>
          12.04.2021
        </span>
        </>
      } />
      
      <InfoCard title="Experience" children={
        <>
        <span className='info-span'>
          2 Yrs
        </span>
        </>
      } />
      <InfoCard title="Role" children={
        <>
        <span className='info-span'>
          Full Stack
        </span>
        </>
      } />
      <InfoCard title="Status" children={
        <>
        <span className={`sts-btn-info status-btn-active`}>Active</span>
        </>
      } />
      <InfoCard title="Email ID" children={
        <>
        <span className='info-span'>
          Vishal@gmail.com
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
          E3456767
        </span>
     
        </>
      } />
      <InfoCard title="Age" children={
        <>
        <span className='info-span'>
          25
        </span>
     
        </>
      } />
      
    </div>
   </div>
    </div>
  )
}

export default EmployeeDetails