import HeaderCard from "../../components/HeaderCard/HeaderCard";
import Button from "../../components/Button/Button";
import "./EditEmployee.css"
import UserInput from "../../components/UserInput/UserInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";
import { useState } from "react";

const EditEmployee = () => {
  
  const isEdit= window.location.href.includes("edit") 
  const {id}=useParams()

  const [values,setValues]=useState({
      employeeName:"",
      joiningDate:"",
      experience:"",
      age:"",
      email:"",
      password:"",
      department:"",
      role:"",
      status:"",
      employeeId:"",
      houseno:"",
     line1:"",
     line2:"",
     pincode:""
    })


  return (
    <div className="main-create-emp">
      <div className="header-container">
        <HeaderCard title="Edit Employee" />
      </div>
      <div className="right-card">
        <UserForm values={values}
        onChange={(field,value)=>{
        setValues({...values,[field]:value})
        }}  />
        <div className="btns">
          <Button variant="primary">Create</Button>
          <Button variant="secondary">Cancel</Button>
        </div>

        
      </div>
    </div>
  );
};

export default EditEmployee;
