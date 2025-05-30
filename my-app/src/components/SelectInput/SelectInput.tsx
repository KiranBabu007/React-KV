import React, { type ChangeEventHandler } from 'react'

type SelectInputProps = {
  label: string;
  options: string[];
  name: string;
  value:string;
  onChange:ChangeEventHandler<HTMLSelectElement>
}

const SelectInput = ({ label, options, name,value,onChange }: SelectInputProps) => {
  return (
    <div className="details">
      <label htmlFor={name}>{label}</label>
      <select onChange={onChange} name={name} id={name} value={value} defaultValue="">
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