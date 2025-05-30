import type { Action } from "redux";
import {EMPLOYEE_ACTION_TYPES, type EmployeeAction,  type EmployeeState } from "./employee.types";
import Employee from "../../pages/Employee/Employee";

const initialState:EmployeeState = { employees:[] }

const employeeReducer = (state:EmployeeState=initialState,action:EmployeeAction)=>{
  switch(action.type){
    case EMPLOYEE_ACTION_TYPES.DELETE:
        console.log("Deleted")
        return state
        
    case EMPLOYEE_ACTION_TYPES.UPDATE:
        console.log("Updated")
        return state
    case EMPLOYEE_ACTION_TYPES.ADD:
        console.log("Employee Added")
        return { ...state,employees:[...state.employees,action.payload]}

    default:
        return state
  }
  
}

export default employeeReducer