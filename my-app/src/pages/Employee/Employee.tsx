import React, { useState } from "react";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import "./Employee.css";
import DetailCard from "../../components/DetailCard/DetailCard";
import HeaderButton from "../../components/HeaderButton/HeaderButton";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup/Popup";

interface EmpDetails {
  name: string;
  emp_id: string;
  Joining_date: string;
  Role: string;
  Status: string;
  Experience: string;
}

const data: EmpDetails[] = [
  {
    name: "Jithin",
    emp_id: "123",
    Joining_date: "2021.05.04",
    Role: "Developer",
    Status: "Active",
    Experience: "6",
  },
  {
    name: "Jithin",
    emp_id: "123",
    Joining_date: "2021.05.04",
    Role: "Developer",
    Status: "Inactive",
    Experience: "6",
  },
  {
    name: "Jithin",
    emp_id: "123",
    Joining_date: "2021.05.04",
    Role: "Developer",
    Status: "Probation",
    Experience: "6",
  },
  {
    name: "Jithin",
    emp_id: "123",
    Joining_date: "2021.05.04",
    Role: "Developer",
    Status: "Active",
    Experience: "6",
  },
  {
    name: "Jithin",
    emp_id: "123",
    Joining_date: "2021.05.04",
    Role: "Developer",
    Status: "Active",
    Experience: "6",
  },
  {
    name: "Jithin",
    emp_id: "123",
    Joining_date: "2021.05.04",
    Role: "Developer",
    Status: "Active",
    Experience: "6",
  },
  {
    name: "Jithin",
    emp_id: "123",
    Joining_date: "2021.05.04",
    Role: "Developer",
    Status: "Active",
    Experience: "6",
  },
  {
    name: "Jithin",
    emp_id: "123",
    Joining_date: "2021.05.04",
    Role: "Developer",
    Status: "Active",
    Experience: "6",
  },
  {
    name: "Jithin",
    emp_id: "123",
    Joining_date: "2021.05.04",
    Role: "Developer",
    Status: "Active",
    Experience: "6",
  },
];

const Employee = () => {

  const [popup,setPopup]=useState(false)

  const navigate=useNavigate()
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
                  <select className="status-select" defaultValue="Status">
                    <option value="Status">Status </option>
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
                {
                  data.map((data)=> <DetailCard  setPopup={setPopup} key={data.emp_id} data={data} />)
                }
                
              </div>
            </div>
          </div>
        </div>
  );
};

export default Employee;
