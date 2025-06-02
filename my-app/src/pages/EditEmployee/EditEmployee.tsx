import HeaderCard from "../../components/HeaderCard/HeaderCard";
import Button from "../../components/Button/Button";
import "./EditEmployee.css"
import UserForm from "../../components/UserForm/UserForm";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeRole, EmployeeStatus } from "../../store/employee/employee.types";
import { 
  useEditEmployeeMutation, 
  useGetEmployeeQuery
} from "../../api-services/employees/employee.api";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editEmployee] = useEditEmployeeMutation();
  
 
  const { data: existingEmployee} = useGetEmployeeQuery({id:id});


  const [values, setValues] = useState({
    name: "",
    dateOfJoining: "",
    experience: 0,
    age: 0,
    email: "",
    password: "",
    role: EmployeeRole.DEVELOPER,
    status: EmployeeStatus.ACTIVE,
    departmentId: 0,
    employeeId: "",
    address: {
      houseNo: 0,
      line1: "",
      line2: "",
      pincode: 0,
    }
  });

  
  useEffect(() => {
    if (existingEmployee) {
      setValues({
        name: existingEmployee.name || "",
        dateOfJoining: existingEmployee.dateOfJoining || "",
        experience: existingEmployee.experience || 0,
        age: existingEmployee.age || 0,
        email: existingEmployee.email || "",
        password: existingEmployee.password || "",
        role: existingEmployee.role || EmployeeRole.DEVELOPER,
        status: existingEmployee.status || EmployeeStatus.ACTIVE,
        departmentId: existingEmployee.departmentId || 0,
        employeeId: existingEmployee.employeeId || "",
        address: {
          houseNo: existingEmployee.address?.houseNo || 0,
          line1: existingEmployee.address?.line1 || "",
          line2: existingEmployee.address?.line2 || "",
          pincode: existingEmployee.address?.pincode || 0,
        }
      });
    }
  }, [existingEmployee]);

  const handleEdit = async () => {
    try {
      
      const processedData = {
        id: id,
        ...values,
        departmentId: Number(values.departmentId),
        experience: Number(values.experience),
        age: Number(values.age),
        address: {
          ...values.address,
          houseNo: Number(values.address.houseNo),
          pincode: Number(values.address.pincode)
        }
      };

    
      console.log(processedData)
      await editEmployee(processedData).unwrap();
      
      
      navigate("/employee"); 
      
    } catch (error) {
      console.error("Update failed:", error);
     
    }
  };

  const handleCancel = () => {
    navigate("/employee");
  };



  return (
    <div className="main-create-emp">
      <div className="header-container">
        <HeaderCard title="Edit Employee" />
      </div>
      <div className="right-card">
        <UserForm 
          disable={false}
          values={values}
          onChange={(field, value) => {
            setValues(prev => ({ ...prev, [field]: value }));
          }} 
          onAddressChange={(field, value) => {
            setValues(prev => ({
              ...prev,
              address: { ...prev.address, [field]: value }
            }));
          }} 
        />
        <div className="btns">
          <Button onClick={handleEdit} variant="primary">
            Update Employee
          </Button>
          <Button onClick={handleCancel} variant="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;