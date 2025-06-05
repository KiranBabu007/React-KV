import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./EmployeeDetails.css";
import Button from "../../components/Button/Button";

const AssignmentPage = () => {
  const [search, setSearch] = useSearchParams();
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [getvalue, Setgetvalue] = useState("");
  const [key, setKey] = useState("");

  return (
    <div className="asm-employee-details">
      <h1>Employee Details</h1>
      <div className="asm-details-card">
        <p>
          <strong>Employee ID:</strong>
          {id}
        </p>

        <input
          type="text"
          value={key}
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />

        <Button
          variant="primary"
          onClick={() => {
            Setgetvalue(search.get(key) || "no key");
          }}
        >
          Get
        </Button>
        <label htmlFor="">Search Params : {getvalue}</label>

        <input
          type="text"
          value={key}
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button
          variant="primary"
          onClick={() => {
            setSearch(new URLSearchParams(`?${key}=${value}`));
          }}
        >
          Set
        </Button>
      </div>
    </div>
  );
};

export default AssignmentPage;
