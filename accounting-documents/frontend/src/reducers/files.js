import {GET_FILES, DELETE_FILE, ADD_FILE } from '../actions/types';



const initialState = {
    files: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_FILES:
            return {
                ...state,
                files: action.payload
            };
        case DELETE_FILE:
            return {
                ...state,
                files: state.files.filter(file => file.id !== action.payload)
            };
        case ADD_FILE:
            return {
                ...state,
                files: [...state.files, action.payload]
            };
        default:
            return state;
    }
}