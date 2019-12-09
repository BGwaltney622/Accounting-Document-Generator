import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addFile} from "../../actions/files";


export class FileForm extends Component {
    state = {
        file: new FormData(),
        fileName: "Choose File"
    };

    static propTypes = {
        addFile: PropTypes.func.isRequired
    };

    onChange = e => {
        this.state.file.append('file', e.target.files[0]);
        this.setState({fileName: e.target.files[0]['name']})
    };

    onClick = e => {
        this.setState({
            file: new FormData(),
            fileName: "Choose File"
        })
    }


    handleFileUpload = () => {
        this.props.addFile(this.state.file);
        this.setState({
            file: new FormData(),
            fileName: "Choose File"
        })
    };

  render() {
    return (
        <Fragment>
            <div className="container" style={fileDiv}>
                <h1>Input File Here</h1>
                <form onSubmit={this.handleFileUpload} style={formStyle}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="submit">Upload</button>
                        </div>
                        <div className="input-group-prepend">
                            <button onClick={this.onClick} className="btn btn-outline-secondary" type="button">Reset</button>
                        </div>
                        <div className="custom-file">
                            <input onChange={this.onChange} type="file" className="custom-file-input" id="inputGroupFile03" />
                                <label className="custom-file-label" htmlFor="inputGroupFile03">{this.state.fileName}</label>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
  }
}

export default connect(null, { addFile })(FileForm);


const fileDiv = {
    padding: '50px',
};

const formStyle = {
    padding: '20px',
};