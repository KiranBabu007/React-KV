import HeaderCard from "../../components/HeaderCard/HeaderCard";
import Button from "../../components/Button/Button";
import "./CreateEmployee.css";
import { useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import {  EmployeeRole, EmployeeStatus } from "../../store/employee/employee.types";
import { useAddEmployeeMutation } from "../../api-services/employees/employee.api";


const CreateEmployee = () => {
  
  const [create]=useAddEmployeeMutation()

  const [values,setValues]=useState({
    name:"",
    dateOfJoining:"",
    experience:Number(0),
    age:0,
    email:"",
    password:"",
    role:EmployeeRole.DEVELOPER,
    status:EmployeeStatus.ACTIVE,
    departmentId:0,
    employeeId:"",
    address:{
      houseNo: Number(""),
  line1: "",
  line2: "",
  pincode:Number("") ,
  
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
          <Button variant="primary" onClick={async()=>{  const processedData = {
    ...values,
    departmentId: Number(values.departmentId),
    experience: Number(values.experience),
    age: Number(values.age),
    
  }; 
  await create(processedData) } }>Create</Button>
          <Button variant="secondary">Cancel</Button>
          
        </div>

        
      </div>
    </div>
  );
};

export default CreateEmployee;
