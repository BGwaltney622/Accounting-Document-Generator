import axios from 'axios';
import {GET_FILES, DELETE_FILE, ADD_FILE } from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

//GET FILES
export const getFiles = () => (dispatch, getState) => {
    axios
        .get('/api/files', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_FILES,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    };

//DELETE FILE
export const deleteFile = (file_id) => (dispatch, getState) => {
    axios
        .delete(`/api/files/${file_id}`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ fileDeleted: "File Deleted!"}));
            dispatch({
                type: DELETE_FILE,
                payload: file_id
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    };

//ADD File
export const addFile = (data) => (dispatch, getState) => {
    // Get Token from state
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    // If Token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    axios
        .post('/api/files', data, config)
        .then(res => {
            dispatch(createMessage({ fileAdded: "File Added!"}));
            dispatch({
                type: ADD_FILE,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
    };