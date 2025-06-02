import HeaderCard from "../../components/HeaderCard/HeaderCard";
import Button from "../../components/Button/Button";
import "./EditEmployee.css"
import UserInput from "../../components/UserInput/UserInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { EMPLOYEE_ACTION_TYPES } from "../../store/employee/employee.types";

const EditEmployee = () => {
  
  const isEdit= window.location.href.includes("edit") 
  const {id}=useParams()

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
      employeeId:id,
      houseno:"",
      address:{
        line1:"",
        line2:"",
        houseNo:"",
        pincode:""
      }
    })

    const dispatch=useDispatch()
  return (
    <div className="main-create-emp">
      <div className="header-container">
        <HeaderCard title="Edit Employee" />
      </div>
      <div className="right-card">
        <UserForm values={values}
        onChange={(field,value)=>{
        setValues({...values,[field]:value})
        }} onAddressChange={(field,value)=>{
          setValues({...values,address:{...values.address,[field]:value}})
        }} />
        <div className="btns">
          <Button onClick={()=>{
            dispatch({type:EMPLOYEE_ACTION_TYPES.UPDATE,payload:values})
          }} variant="primary">Edit</Button>
          <Button variant="secondary">Cancel</Button>
        </div>

        
      </div>
    </div>
  );
};

export default EditEmployee;
