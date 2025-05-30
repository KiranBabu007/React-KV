import React from 'react'
import UserInput from '../UserInput/UserInput'
import SelectInput from '../SelectInput/SelectInput'
import { useParams } from 'react-router-dom'

interface empData {
  employeeName: string,
  employeeId:string
    joiningDate:string,
    experience:string,
    age:string,
    email:string,
    password:string,
    department:string,
    role:string,
    status:string,
    houseno:string
    line1:string
    line2:string
   
}

const UserForm = ({values,onChange}:{values:empData,onChange:(field:string,value:string)=>void}) => {
    const isEdit= window.location.href.includes("edit") 
  const {id}=useParams()
  return (
  <form className="details-card">
          <UserInput
           onChange={(e)=>{
            onChange("employeeName",e.target.value)
           }}
            type="text"
            value={values.employeeName}
            label="Employee Name"
            placeholder="Employee Name"
          />
          <UserInput
          onChange={(e)=>{
            onChange("joiningDate",e.target.value)
           }}
            type="date"
            value={values.joiningDate}
            label="Joining Date"
            placeholder="Joining Date"
          />
          <UserInput  onChange={(e)=>{
            onChange("experience",e.target.value)
           }} type="text" value={values.experience} label="Experience (yrs)" placeholder="0" />
              <UserInput
            type="number"
             onChange={(e)=>{
            onChange("age",e.target.value)
           }}
            value={values.age}
            label="Age"
            placeholder="Age"
          />
           <UserInput
            type="text"
             onChange={(e)=>{
            onChange("email",e.target.value)
           }}
            value={values.email}
            label="Email"
            placeholder="Email"
          />
          <UserInput
            type="password"
            onChange={(e)=>{
            onChange("password",e.target.value)
           }}
            value={values.password}
            label="Password"
            placeholder="Password"
          />
          <SelectInput
            label="Department"
             onChange={(e)=>{
            onChange("department",e.target.value)
           }}
            value={values.department}
            options={["Marketingr", "Finance"]}
            name="department"
            
          />
          <SelectInput
            label="role"
             onChange={(e)=>{
            onChange("role",e.target.value)
           }}
            value={values.role}
            options={["QA Engineer", "FrontEnd Engineer"]}
            name="role"
          />
          <SelectInput
            label="Status"
             onChange={(e)=>{
            onChange("status",e.target.value)
           }}
            value={values.status}
            options={["Active","Inactive","Probation"]}
            name="Status"
          />
          <div className="details">
            <label htmlFor="address">Address</label>
            <input  onChange={(e)=>{
            onChange("houseno",e.target.value)
           }} value={values.houseno} type="text" id="houseno" placeholder="Flat No / House No" />
            <input  onChange={(e)=>{
            onChange("line1",e.target.value)
           }} value={values.line1} type="text" id="line1" placeholder="Address Line 1" />
            <input  onChange={(e)=>{
            onChange("line2",e.target.value)
           }} value={values.line2}  type="text" id="line2" placeholder="Address Line 2" />
          </div>
          
          <UserInput
            type="text"
            onChange={(e)=>{
            onChange("employeeId",e.target.value)
           }}
            label="Employee ID"
            value={values.employeeId}
            placeholder={isEdit ? `${id}`: "Employee ID"}
            disable={isEdit}
            className={isEdit ? "edit":""}
          />
        </form>
  )
}

export default UserForm