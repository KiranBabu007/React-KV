import React, { Suspense, useEffect, useState } from "react";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import "./Employee.css";

import HeaderButton from "../../components/HeaderButton/HeaderButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { lazy } from 'react';
import { type Employee } from "../../store/employee/employee.types";
import { useGetEmployeeListQuery } from "../../api-services/employees/employee.api";

const DetailCard= lazy(() => import("../../components/DetailCard/DetailCard"));



const Employee = () => {

  

  const [query,setQuery]=useSearchParams()
  

 

  const navigate=useNavigate()

  const {data}=useGetEmployeeListQuery({})


  const status=query.get("status") || "All"
  
  const filteredData = 
    status == "All"
      ? data
      : data.filter((emp:Employee) => emp.status === status)

  return (
      <div className="main-emp">

        
        <div className="header-container">
          <HeaderCard
            title="Employee"
            endAdornment={
              <div className="employee-functions">
                <label>Filter By</label>
                <div className="status-container">
                  <select  value={status} onChange={(e)=>{
                      setQuery({status:e.target.value})

                  }} className="status-select" >
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">InActive</option>
                    <option value="Probation">Probation</option>
                  </select>
                </div>

                <HeaderButton  onClick={()=>{
            navigate("/employee/create")
          }} label={"Create Employee"} />
              </div>
            }
          />

     
            <div className="emp-list-container">
              <div className="emp-list">
                <div className="list-header">
                  <h4>Employee Name</h4>
                  <h4>Employee Id</h4>
                  <h4>Joining Date</h4>
                  <h4>Role</h4>
                  <h4>Status</h4>
                  <h4>Experience</h4>
                  <h4>Action</h4>
                </div>
              </div>

              <div className="emp-detail-cards">
                <Suspense fallback={<><h2 >Loading list please wait</h2></>}>
  
  { data &&
                filteredData.map((emp:Employee,i:number)=> <DetailCard  key={i} data={emp} />)
              }
</Suspense>
              
                
              </div>
            </div>
          </div>
        </div>
  );
};

export default Employee;
