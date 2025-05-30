import { MdModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";
import "./DetailCard.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import type { Employee } from "../../store/employee/employee.types";





const DetailCard = ({
  data,
  setPopup,
}: {
  data: Employee;
  setPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
   
  return (

    <div className="detailcard-container">
      <div
        onClick={() => {
          navigate(`/employee/${data.employeeId}`);
        }}
        className="detailcard"
      >
        <span>{data.name}</span>
        <span>{data.employeeId}</span>
        <span>{data.dateOfJoining}</span>
        <span>{data.role}</span>
        <span className={`sts-btn status-btn-${data.status.toLowerCase()}`}>
          {data.status}
        </span>
        <span>{data.experience} Years</span>
        <div>
          <RiDeleteBin6Line
            onClick={(e) => {
              e.stopPropagation()
              if (setPopup) setPopup(true);
            }}
            className="dlt-icon"
          />
          <MdModeEditOutline
            onClick={(e) => {
              e.stopPropagation()
              navigate(`/employee/edit/${data.employeeId}`);
            }}
            className="edit-icon"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
