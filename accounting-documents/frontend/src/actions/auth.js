import axios from 'axios';
import { returnErrors } from "./messages";
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";

// Check Token and Load User
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });

    //Request to get user
    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type:AUTH_ERROR
            });
        });
};


// Login User
export const login = (username, password) => {
    return dispatch => {

        //Headers
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        //Request Body
        const body = JSON.stringify({username, password});

        //Request to get user
        axios.post('/api/auth/login', body, config)
            .then(res => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                });
            }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            });
        });
    };
};

// Register User
export const register = ({ username, password, email}) => {
    return dispatch => {

        //Headers
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        //Request Body
        const body = JSON.stringify({username, email, password});

        //Request to get user
        axios.post('/api/auth/register', body, config)
            .then(res => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data
                });
            }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL
            });
        });
    };
};

// Logout User
export const logout = () => (dispatch, getState) => {
    axios.post('/api/auth/logout/', null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
};

//Setup Headers with Token
export const tokenConfig = getState => {
    // Get Token from state
    const token = getState().auth.token;

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // If Token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    return config
};