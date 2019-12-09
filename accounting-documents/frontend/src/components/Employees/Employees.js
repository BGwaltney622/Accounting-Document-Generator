import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import PropTypes from 'prop-types';
import {deleteEmployee, getEmployees, updateEmployee} from "../../actions/employees";

export class Employees extends Component {
    static propTypes = {
        employees: PropTypes.array.isRequired,
        getEmployees: PropTypes.func.isRequired,
        deleteEmployee: PropTypes.func.isRequired,
        updateEmployee: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        const columns = [{
            dataField: 'employee_id',
            text: 'Employee ID',
            hidden: true
        },{
            dataField: 'last_name',
            text: 'Last Name'
        },{
            dataField: 'first_name',
            text: 'First Name'
        },{
            dataField: 'salary',
            text: 'Salary'
        },{
            dataField: 'asn_per',
            text: 'ASN %'
        },{
            dataField: 'twenty_per',
            text: '20G %'
        },{
            dataField: 'fdn_per',
            text: 'FDN %'
        },{
            dataField: 'svc_per',
            text: 'SVC %'
        },{
            dataField: 'ucd_per',
            text: 'UCD %'
        },{
            dataField: 'sp_per',
            text: 'SP %'
        },{
            dataField: 'tv_per',
            text: 'TV %'
        },{
            dataField: 'Delete',
            text: "Delete",
            formatter: (rowContent, row) => {
                return(
                    <button onClick={this.props.deleteEmployee.bind(this, row.employee_id)} className="btn btn-danger btn-sm">Delete</button>
                )
            },
            editable: false
        }];

        const defaultSorted = [{
            dataField: 'last_name',
            order: 'asc'
        }];

        let save = null;

        return(
            <Fragment>
                <h2>Employees</h2>
                <BootstrapTable keyField='employee_id'
                                data={ this.props.employees }
                                columns={ columns }
                                defaultSorted={ defaultSorted }
                                noDataIndication="Table is Empty"
                                cellEdit={ cellEditFactory({
                                    mode: 'dbclick',
                                    beforeSaveCell: () => { save = confirm('Do you want to accept this change?');},
                                    afterSaveCell: (oldValue, newValue, row, column) => {
                                        save ? this.props.updateEmployee(row) : null
                                    },
                                }) }
                                striped
                                hover/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    employees: state.Employees.employees
});


export default connect(mapStateToProps, { getEmployees, deleteEmployee, updateEmployee })(Employees);