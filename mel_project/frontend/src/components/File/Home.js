import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmployee} from "../../actions/employees";

export class Home extends Component {
    render() {
        return(
            <Fragment>
                <h1>Home Page</h1>
            </Fragment>
        )
    }
}

export default Home;