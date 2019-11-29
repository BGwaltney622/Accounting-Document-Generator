import axios from 'axios';
import { GET_EMPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE, GET_ERRORS } from "./types";
import { createMessage } from "./messages";


//GET EMPLOYEES
export const getEmployees = () => dispatch => {
    axios
        .get('/api/employees/')
        .then(res => {
            dispatch({
                type: GET_EMPLOYEES,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//DELETE EMPLOYEE
export const deleteEmployee = (employee_id) => dispatch => {
    axios
        .delete(`/api/employees/${employee_id}/`)
        .then(res => {
            dispatch(createMessage({ employeeDeleted: "Employee Deleted!"}));
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: employee_id
            });
        }).catch(err => console.log(err));
};

//ADD EMPLOYEE
export const addEmployee = (employee) => dispatch => {
    console.log(axios
        .post('/api/employees/', employee)
        .then(res => {
            dispatch(createMessage({ employeeAdded: "Employee Added!"}));
            dispatch({
                type: ADD_EMPLOYEE,
                payload: res.data
            })
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
         })
)};