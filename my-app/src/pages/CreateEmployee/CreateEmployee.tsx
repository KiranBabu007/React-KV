import HeaderCard from "../../components/HeaderCard/HeaderCard"
import Button from "../../components/Button/Button"

import "./CreateEmployee.css"

const CreateEmployee = () => {
  

  return (
    <div className="main">
      <div className="header-container">
         <HeaderCard title="Create Employee" />
      </div>
        <div className="right-card">
          <form className="details-card">
            <div className="details">
              <label htmlFor="name">Employee Name</label>
              <input type="text" id="name" placeholder="Employee name" />
            </div>

            <div className="details">
              <label htmlFor="employeeId">EmployeeID</label>
              <input type="text" id="employeeId" placeholder="EmployeeID" />
            </div>

            <div className="details">
              <label htmlFor="joiningDate">Joining Date</label>
              <input type="date" id="joiningDate" placeholder="Joining Date" />
            </div>

            <div className="details">
              <label htmlFor="role">Role</label>
              <select name="role" id="role" defaultValue="">
                <option value="" disabled>Select role</option>
                <option value="QA Engineer">QA Engineer</option>
              </select>
            </div>

            <div className="details">
              <label htmlFor="status">Status</label>
              <select name="status" id="status" defaultValue="">
                <option value="" disabled>Select status</option>
                <option value="Married">Married</option>
                <option value="Single">Single</option>
              </select>
            </div>

            <div className="details">
              <label htmlFor="experience">Experience</label>
              <input type="number" id="experience" placeholder="Experience" />
            </div>

            <div className="details">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="Address" />
            </div>

            <div className="btns">
              <Button  variant="primary">Create</Button>
              <Button  variant="secondary">Cancel</Button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default CreateEmployee