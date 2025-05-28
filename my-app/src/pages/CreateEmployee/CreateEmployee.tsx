import HeaderCard from "../../components/HeaderCard/HeaderCard";
import Button from "../../components/Button/Button";
import "./CreateEmployee.css";
import UserInput from "../../components/UserInput/UserInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const navigate = useNavigate();

  return (
    <div className="main-create-emp">
      <div className="header-container">
        <HeaderCard title="Create Employee" />
      </div>
      <div className="right-card">
        <form className="details-card">
          <UserInput
            type="text"
            label="Employee Name"
            placeholder="Employee Name"
          />
          <UserInput
            type="date"
            label="Joining Date"
            placeholder="Joining Date"
          />
          <UserInput type="text" label="Experience (yrs)" placeholder="0" />
          <SelectInput
            label="Department"
            options={["Marketingr", "Finance"]}
            name="department"
          />
          <SelectInput
            label="role"
            options={["QA Engineer", "FrontEnd Engineer"]}
            name="role"
          />
          <SelectInput
            label="Status"
            options={["Single", "Married"]}
            name="Status"
          />
          <div className="details">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Flat No / House No" />
            <input type="text" id="address" placeholder="Address Line 1" />
            <input type="text" id="address" placeholder="Address Line 2" />
          </div>
        </form>
        <div className="btns">
          <Button variant="primary">Create</Button>
          <Button variant="secondary">Cancel</Button>
        </div>

        <div style={{ margin: 5 }}>
          <Button
            variant="secondary"
            onClick={() => {
              localStorage.setItem("loggedIn", "false");
              navigate("/login");
            }}
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
