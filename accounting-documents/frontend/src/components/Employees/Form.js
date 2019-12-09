import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmployee} from "../../actions/employees";
import { createMessage } from "../../actions/messages";

export class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        salary: '',
        asnPer: '',
        twentyPer: '',
        fdnPer: '',
        svcPer: '',
        ucdPer: '',
        spPer: '',
        tvPer: '',
    };

    static propTypes = {
        addEmployee: PropTypes.func.isRequired,
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        let {firstName, lastName, salary, asnPer, twentyPer, fdnPer, svcPer, ucdPer, spPer, tvPer} = this.state;
        if (asnPer === '') {
            asnPer = '0'
        }
        if (twentyPer === '') {
            twentyPer = '0'
        }
        if (fdnPer === '') {
            fdnPer = '0'
        }
        if (svcPer === '') {
            svcPer = '0'
        }
        if (ucdPer === '') {
            ucdPer = '0'
        }
        if (spPer === '') {
            spPer = '0'
        }
        if (tvPer === '') {
            tvPer = '0'
        }
        if (parseInt(asnPer) + parseInt(twentyPer) + parseInt(fdnPer) + parseInt(svcPer) + parseInt(ucdPer) + parseInt(spPer) + parseInt(tvPer) === 100) {
            const employee = {
                first_name: firstName,
                last_name: lastName,
                salary: salary,
                asn_per: asnPer,
                twenty_per: twentyPer,
                fdn_per: fdnPer,
                svc_per: svcPer,
                ucd_per: ucdPer,
                sp_per: spPer,
                tv_per: tvPer
            };
            this.props.addEmployee(employee);
            this.setState({
                firstName: '',
                lastName: '',
                salary: '',
                asnPer: '',
                twentyPer: '',
                fdnPer: '',
                svcPer: '',
                ucdPer: '',
                spPer: '',
                tvPer: '',
            })
        } else {
            this.props.createMessage({ splitTotal: "Company percentages must equal 100%"})
        }
    };

    render() {
        const {firstName, lastName, salary, asnPer, twentyPer, fdnPer, svcPer, ucdPer, spPer, tvPer} = this.state;
        return(
            <Fragment>
            <div className="card card-body mt-4 mb-4 ">
                <h2>Add Employee</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input type="text"
                                   className="form-control"
                                   name="firstName"
                                   placeholder="First Name"
                                   onChange={this.onChange}
                                   value={firstName} />
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text"
                                   className="form-control"
                                   name="lastName"
                                   placeholder="Last Name"
                                   onChange={this.onChange}
                                   value={lastName}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text"
                                   className="form-control"
                                   name="salary"
                                   placeholder="Salary"
                                   onChange={this.onChange}
                                   value={salary}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input type="text"
                                   className="form-control"
                                   name="asnPer"
                                   placeholder="ASN %"
                                   onChange={this.onChange}
                                   value={asnPer} />
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text"
                                   className="form-control"
                                   name="twentyPer"
                                   placeholder="20G %"
                                   onChange={this.onChange}
                                   value={twentyPer}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text"
                                   className="form-control"
                                   name="fdnPer"
                                   placeholder="FDN %"
                                   onChange={this.onChange}
                                   value={fdnPer}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text"
                                   className="form-control"
                                   name="svcPer"
                                   placeholder="SVC %"
                                   onChange={this.onChange}
                                   value={svcPer}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text"
                                   className="form-control"
                                   name="ucdPer"
                                   placeholder="UCD %"
                                   onChange={this.onChange}
                                   value={ucdPer}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text"
                                   className="form-control"
                                   name="spPer"
                                   placeholder="SP %"
                                   onChange={this.onChange}
                                   value={spPer}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text"
                                   className="form-control"
                                   name="tvPer"
                                   placeholder="TV %"
                                   onChange={this.onChange}
                                   value={tvPer}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            </Fragment>
        )
    }
}

export default connect(null, {addEmployee, createMessage})(Form);