import React from "react";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import "./Employee.css";
import DetailCard from "../../components/DetailCard/DetailCard";

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
    Status: "Working",
    Experience: "6",
  },
];

const Employee = () => {
  return (
      <div className="main-emp">
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

                <button className="create-button">
                  <span>+</span> Create Employee
                </button>
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
                <DetailCard data={data[0]} />
              </div>
            </div>
          </div>
        </div>
  );
};

export default Employee;
