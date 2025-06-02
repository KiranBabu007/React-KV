import type { Action } from "redux";
import {EMPLOYEE_ACTION_TYPES, type EmployeeAction,  type EmployeeState } from "./employee.types";


const initialState:EmployeeState = { employees:[] }

const employeeReducer = (state:EmployeeState=initialState,action:EmployeeAction)=>{
  switch(action.type){
        
    case EMPLOYEE_ACTION_TYPES.ADD:
        console.log("Employee Added")
        return { ...state,employees:[...state.employees,action.payload]}
    case EMPLOYEE_ACTION_TYPES.DELETE:
        console.log("Employee Deleted")
        return {...state,employees:state.employees.filter((emp)=>emp.employeeId!==action.payload)}
    case EMPLOYEE_ACTION_TYPES.UPDATE:
        console.log("Updated")
        return {...state,employees:state.employees.map((emp)=> emp.employeeId===action.payload.employeeId ? action.payload : emp )}
    default:
        return state
  }
  
}

export default employeeReducer