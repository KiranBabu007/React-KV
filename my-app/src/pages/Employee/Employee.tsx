import React, { Suspense, useEffect, useState } from "react";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import "./Employee.css";

import HeaderButton from "../../components/HeaderButton/HeaderButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import Popup from "../../components/Popup/Popup";
import { data } from "../../data/empdetails";
import { lazy } from 'react';

const DetailCard= lazy(() => import("../../components/DetailCard/DetailCard"));



const Employee = () => {


  const [popup,setPopup]=useState(false)
  const [query,setQuery]=useSearchParams()
  const [status,setStatus]=useState('All')
  const navigate=useNavigate()
  
  const filteredData = 
    status == "All"
      ? data
      : data.filter((data) => data.Status === status)

  return (
      <div className="main-emp">

        { popup && <Popup setPopup={setPopup} />}
        <div className="header-container">
          <HeaderCard
            title="Employee"
            endAdornment={
              <div className="employee-functions">
                <label>Filter By</label>
                <div className="status-container">
                  <select value={status} onChange={(e)=>{
                      setStatus(e.target.value)

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
  
  { 
                filteredData.map((data, i)=> <DetailCard setPopup={setPopup} key={i} data={data} />)
              }
</Suspense>
              
                
              </div>
            </div>
          </div>
        </div>
  );
};

export default Employee;
