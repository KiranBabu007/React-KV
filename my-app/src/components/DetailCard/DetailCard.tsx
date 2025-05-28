import { MdModeEditOutline, MdOutlineDeleteForever } from "react-icons/md"
import "./DetailCard.css"

interface EmpDetails   {
  name:string,
  emp_id:string,
  Joining_date:string,
  Role:string,
  Status:string,
  Experience:string
}

const DetailCard = ({data}:{data:EmpDetails}) => {
  return (
    <div className='detailcard-container'>
       <div className='detailcard'>
         
          <span>{data.name}</span>
          <span>{data.emp_id}</span>
          <span>{data.Joining_date}</span>
          <span>{data.Role}</span>
          <span>{data.Status}</span>
          <span>{data.Experience}</span>
          <div><MdOutlineDeleteForever /> <MdModeEditOutline /> </div>
          
          
   
       </div>
    </div>
  )
}

export default DetailCard