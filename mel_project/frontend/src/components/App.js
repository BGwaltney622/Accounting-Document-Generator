import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './Layout/Header';
import Dashboard from './Employees/Dashboard';
import Alerts from "./Layout/Alerts";
import Login from "./Accounts/Login";
import Register from "./Accounts/Register";
import PrivateRoute from "./Common/PrivateRoute";
import { loadUser} from "../actions/auth";

import { Provider } from 'react-redux';
import store from '../store';


const alertOptions = {
    timeout: 3000,
    position: positions.TOP_CENTER,
    transition: transitions.SCALE,
};


class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path={"/"} component={Dashboard} />
                                    <Route exact path={"/register"} component={Register} />
                                    <Route exact path={"/login"} component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));