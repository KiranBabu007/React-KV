import HeaderCard from "../../components/HeaderCard/HeaderCard";
import Button from "../../components/Button/Button";
import "./CreateEmployee.css";
import { useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { EMPLOYEE_ACTION_TYPES, EmployeeRole, EmployeeStatus, type EmployeeState } from "../../store/employee/employee.types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addEmployee } from "../../store/employee/employeeSlice";

const CreateEmployee = () => {
  const dispatch=useAppDispatch()

  const [values,setValues]=useState({
    name:"",
    dateOfJoining:"",
    experience:Number(0),
    age:"",
    email:"",
    password:"",
    department:"",
    role:EmployeeRole.DEVELOPER,
    status:EmployeeStatus.ACTIVE,
    employeeId:"",
    address:{
      houseNo: "",
  line1: "",
  line2: "",
  pincode: ""
    }
   
  })

 

  return (
    <div className="main-create-emp">
      <div className="header-container">
        <HeaderCard title="Create Employee" />
      </div>
      <div className="right-card">
        <UserForm values={values}
        onChange={(field,value)=>{
        setValues({...values,[field]:value})
        }} onAddressChange={(field,value)=>{
          setValues({...values,address:{...values.address,[field]:value}})
        }
        } />
        <div className="btns">
          <Button variant="primary" onClick={()=>{dispatch(addEmployee(values)); console.log("created")}}>Create</Button>
          <Button variant="secondary">Cancel</Button>
          
        </div>

        
      </div>
    </div>
  );
};

export default CreateEmployee;
