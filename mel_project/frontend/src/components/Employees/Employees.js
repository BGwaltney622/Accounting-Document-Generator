import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEmployees, deleteEmployee } from "../../actions/employees";

export class Employees extends Component {
    static propTypes = {
        employees: PropTypes.array.isRequired,
        getEmployees: PropTypes.func.isRequired,
        deleteEmployee: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        return(
            <Fragment>
                <h2>Employees</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Salary</th>
                            <th>ASN %</th>
                            <th>20G %</th>
                            <th>FDN %</th>
                            <th>SVC %</th>
                            <th>UCD %</th>
                            <th>SP %</th>
                            <th>TV %</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                    { this.props.employees.map(employee => (
                        <tr key={employee.employee_id}>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.asn_per}</td>
                            <td>{employee.twenty_per}</td>
                            <td>{employee.fdn_per}</td>
                            <td>{employee.svc_per}</td>
                            <td>{employee.ucd_per}</td>
                            <td>{employee.sp_per}</td>
                            <td>{employee.tv_per}</td>
                            <td><button onClick={this.props.deleteEmployee.bind(this, employee.employee_id)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    employees: state.Employees.employees
});


export default connect(mapStateToProps, { getEmployees, deleteEmployee })(Employees);