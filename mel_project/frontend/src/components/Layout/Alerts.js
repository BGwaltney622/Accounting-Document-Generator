import React, {Component, Fragment} from "react";
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if(error !== prevProps.error) {
            if(error.msg.first_name) alert.error(`First Name: ${error.msg.first_name.join()}`);
            if(error.msg.last_name) alert.error(`Last Name: ${error.msg.last_name.join()}`);
            if(error.msg.salary) alert.error(`Salary: ${error.msg.salary.join()}`);
            if(error.msg.asn_per) alert.error(`ASN %: ${error.msg.asn_per.join()}`);
            if(error.msg.twenty_per) alert.error(`20G %: ${error.msg.twenty_per.join()}`);
            if(error.msg.fdn_per) alert.error(`FDN %: ${error.msg.fdn_per.join()}`);
            if(error.msg.svc_per) alert.error(`SVC %: ${error.msg.svc_per.join()}`);
            if(error.msg.ucd_per) alert.error(`UCD %: ${error.msg.ucd_per.join()}`);
            if(error.msg.sp_per) alert.error(`SP %: ${error.msg.sp_per.join()}`);
            if(error.msg.tv_per) alert.error(`TV %: ${error.msg.tv_per.join()}`);
            if(error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if(error.msg.username) alert.error(error.msg.username.join());
            if(error.msg.email) alert.error(error.msg.email.join());


        }
        if (message !== prevProps.message) {
            if (message.employeeDeleted) alert.success(message.employeeDeleted);
            if (message.employeeAdded) alert.success(message.employeeAdded);
            if (message.employeeUpdated) alert.success(message.employeeUpdated);
            if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);
        }
    }


    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));