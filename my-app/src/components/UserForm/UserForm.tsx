import React from 'react'
import UserInput from '../UserInput/UserInput'
import SelectInput from '../SelectInput/SelectInput'
import { useParams } from 'react-router-dom'
import { type Employee } from '../../store/employee/employee.types';
import { useGetDepartmentListQuery } from '../../api-services/department/department.api';



     

const UserForm = ({values,onChange,onAddressChange,disable,}:{values:Employee,onChange:(field:string,value:string)=>void,onAddressChange:(field:string,value:string)=>void,disable?:boolean}) => {
    const isEdit= window.location.href.includes("edit") 
  const {id}=useParams()
  const {data}=useGetDepartmentListQuery({})

  return (
  <form className="details-card">
          <UserInput
           onChange={(e)=>{
            onChange("name",e.target.value)
           }}
            type="text"
            value={values.name}
            label="Employee Name"
            placeholder="Employee Name"
          />
          <UserInput
          onChange={(e)=>{
            onChange("dateOfJoining",e.target.value)
           }}
            type="date"
            value={values.dateOfJoining}
            label="Joining Date"
            placeholder="Joining Date"
          />
          <UserInput  onChange={(e)=>{
            onChange("experience",e.target.value)
           }} type="number" value={values.experience} label="Experience (yrs)"  />
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
          {data && <SelectInput
            label="Department"
             onChange={(e)=>{
            const selectedOption = data.find(dept => dept.name === e.target.value);
    if (selectedOption) {
      onChange("departmentId", selectedOption.id);
      
    }
           }}
            value={values.department}
            options={data.map((dept)=>({
              id:dept.id,
              value:dept.name
            }))}
            name="department"
            
          />}
          <SelectInput
            label="role"
             onChange={(e)=>{
            onChange("role",e.target.value)
           }}
            value={values.role}
            options={[
              { id: "UI", value: "UI" },
              { id: "UX", value: "UX" },
              { id: "DEVELOPER", value: "DEVELOPER" },
              { id: "HR", value: "HR" }
            ]}
            name="role"
          />
          <SelectInput
            label="Status"
             onChange={(e)=>{
            onChange("status",e.target.value)
           }}
            value={values.status}
            options={[
              { id: "ACTIVE", value: "ACTIVE" },
              { id: "INACTIVE", value: "INACTIVE" },
              { id: "PROBATION", value: "PROBATION" }
            ]}
            name="Status"
          />

          <div className="details">
            <label htmlFor="address">Address</label>
            <input  onChange={(e)=>{
            onAddressChange("houseNo",e.target.value)
           }} value={values.address.houseNo} type="text" id="houseno" placeholder="Flat No / House No" />
            <input  onChange={(e)=>{
             onAddressChange("line1",e.target.value)
           }} value={values.address.line1} type="text" id="line1" placeholder="Address Line 1" />
            <input  onChange={(e)=>{
             onAddressChange("line2",e.target.value)
           }} value={values.address.line2}  type="text" id="line2" placeholder="Address Line 2" />
           <input  onChange={(e)=>{
             onAddressChange("pincode",e.target.value)
           }} value={values.address.pincode}  type="number" id="pincode" placeholder="Pincode" />
          </div>
          
          <UserInput
            type="text"
            onChange={(e)=>{
            onChange("employeeId",e.target.value)
           }}
            label="Employee ID"
            value={values.employeeId}
            placeholder={disable ? `${values.employeeId}`: "Employee ID"}
            disable={disable}
            className={isEdit ? "edit":""}
          />
        </form>
  )
}

export default UserForm