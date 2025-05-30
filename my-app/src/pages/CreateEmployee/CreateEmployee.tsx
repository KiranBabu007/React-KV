import HeaderCard from "../../components/HeaderCard/HeaderCard";
import Button from "../../components/Button/Button";
import "./CreateEmployee.css";
import UserInput from "../../components/UserInput/UserInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { useDispatch, useSelector } from "react-redux";
import { EMPLOYEE_ACTION_TYPES, type EmployeeState } from "../../store/employee/employee.types";

const CreateEmployee = () => {
  const state=useSelector(state=>state)
  const dispatch=useDispatch()

  const [values,setValues]=useState({
    name:"",
    dateOfJoining:"",
    experience:"",
    age:"",
    email:"",
    password:"",
    department:"",
    role:"",
    status:"",
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
          <Button variant="primary" onClick={()=>{dispatch({type:EMPLOYEE_ACTION_TYPES.ADD,payload:values}); console.log("Created")}}>Create</Button>
          <Button variant="secondary" onClick={()=>{
            console.log(state)
          }}>Cancel</Button>
          
        </div>

        
      </div>
    </div>
  );
};

export default CreateEmployee;
