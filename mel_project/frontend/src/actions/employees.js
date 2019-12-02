import axios from 'axios';
import {GET_EMPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE, UPDATE_EMPLOYEE} from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";


//GET EMPLOYEES
export const getEmployees = () => (dispatch, getState) => {
    axios
        .get('/api/employees/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_EMPLOYEES,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//DELETE EMPLOYEE
export const deleteEmployee = (employee_id) => (dispatch, getState) => {
    axios
        .delete(`/api/employees/${employee_id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ employeeDeleted: "Employee Deleted!"}));
            dispatch({
                type: DELETE_EMPLOYEE,
                payload: employee_id
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    };

//ADD EMPLOYEE
export const addEmployee = (employee) => (dispatch, getState) => {
    const body = JSON.stringify(employee);

    axios
        .post('/api/employees/', body, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ employeeAdded: "Employee Added!"}));
            dispatch({
                type: ADD_EMPLOYEE,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    };

// Update Employee
export const updateEmployee = (employee) => (dispatch, getState) => {
    const body = JSON.stringify(employee);

    axios
        .put(`/api/employees/${employee.employee_id}/`, body, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ employeeUpdated: "Employee Updated!"}));
            dispatch({
                type: UPDATE_EMPLOYEE,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    };