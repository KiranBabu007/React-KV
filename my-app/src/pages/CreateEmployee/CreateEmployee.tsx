import HeaderCard from "../../components/HeaderCard/HeaderCard";
import Button from "../../components/Button/Button";
import "./CreateEmployee.css";
import UserInput from "../../components/UserInput/UserInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserForm from "../../components/UserForm/UserForm";

const CreateEmployee = () => {
  const navigate = useNavigate();

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
    line2:""
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
        }} />
        <div className="btns">
          <Button variant="primary">Create</Button>
          <Button variant="secondary">Cancel</Button>
        </div>

        
      </div>
    </div>
  );
};

export default CreateEmployee;
