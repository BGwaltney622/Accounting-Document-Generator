import { combineReducers } from 'redux';
import Employees from './Employees';
import errors from './errors';
import messages from "./messages";
import auth from "./auth";
import files from './files'

export default combineReducers({
    Employees,
    errors,
    messages,
    auth,
    files,
});
