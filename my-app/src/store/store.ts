import { legacy_createStore as createStore } from 'redux';
// import rootReducer from './rootReducer'
import employeeReducer from './employee/employeeReducer';


const store = createStore(employeeReducer)

export default store