import React from 'react'

type SelectInputProps = {
  label: string;
  options: string[];
  name: string;
  value:string;
}

const SelectInput = ({ label, options, name,value }: SelectInputProps) => {
  return (
    <div className="details">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={value} defaultValue="">
        <option value="" disabled>Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput