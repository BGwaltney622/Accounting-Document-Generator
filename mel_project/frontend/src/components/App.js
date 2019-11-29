import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './Layout/Header';
import Dashboard from './Employees/Dashboard';
import Alerts from "./Layout/Alerts";

import { Provider } from 'react-redux';
import store from '../store';


const alertOptions = {
    timeout: 3000,
    position: positions.TOP_CENTER,
    transition: transitions.SCALE,
};


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));