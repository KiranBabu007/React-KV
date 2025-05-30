import { MdModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";
import "./DetailCard.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";



interface EmpDetails {
  name: string;
  emp_id: string;
  Joining_date: string;
  Role: string;
  Status: string;
  Experience: string;
}

const DetailCard = ({
  data,
  setPopup,
}: {
  data: EmpDetails;
  setPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
   
  return (

    <div className="detailcard-container">
      <div
        onClick={() => {
          navigate(`/employee/${data.emp_id}`);
        }}
        className="detailcard"
      >
        <span>{data.name}</span>
        <span>{data.emp_id}</span>
        <span>{data.Joining_date}</span>
        <span>{data.Role}</span>
        <span className={`sts-btn status-btn-${data.Status.toLowerCase()}`}>
          {data.Status}
        </span>
        <span>{data.Experience} Years</span>
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
              navigate(`/employee/edit/${data.emp_id}`);
            }}
            className="edit-icon"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
