import { MdModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";
import "./DetailCard.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import type { Employee } from "../../store/employee/employee.types";
import { useState } from "react";
import Popup from "../Popup/Popup";
import { useDispatch } from "react-redux";






const DetailCard = ({
  data,
 
}: {
  data: Employee;
  setPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  
  
    const [popup,setPopup]=useState(false)
  return (

    <div className="detailcard-container">
     {popup && <Popup setPopup={setPopup} id={data.employeeId} />}
     
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
       { data.status &&
        <span className={`sts-btn status-btn-${data.status.toLowerCase()}`}>
           {data.status}
        </span>}
        <span>{data.experience} Years</span>
        <div>
          <RiDeleteBin6Line
            onClick={(e) => {
              e.stopPropagation()
               setPopup(true);
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
