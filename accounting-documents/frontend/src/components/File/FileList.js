import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import { getFiles, deleteFile } from "../../actions/files";


export class FileList extends Component {
    static propTypes = {
        files: PropTypes.array.isRequired,
        getFiles: PropTypes.func.isRequired,
        deleteFile: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getFiles();
    }

    render() {
        const columns = [{
            dataField: 'id',
            text: 'File ID',
        },{
            dataField: 'file',
            text: 'File Name'
        },{
            dataField: 'Delete',
            text: "Delete",
            formatter: (rowContent, row) => {
                return(
                    <button onClick={this.props.deleteFile.bind(this, row.id)} className="btn btn-danger btn-sm">Delete</button>
                )
            },
        }];

        return(
            <Fragment>
                <h2>Files</h2>
                <BootstrapTable keyField='id'
                                data={ this.props.files }
                                columns={ columns }
                                noDataIndication="Table is Empty"
                                striped
                                hover/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    files: state.files.files
});

export default connect(mapStateToProps, { getFiles, deleteFile })(FileList);

// )