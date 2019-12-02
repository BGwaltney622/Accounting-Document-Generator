import React, { Component, Fragment } from 'react';
import MyDropzone from "./Dropzone";


export class Home extends Component {

    render() {
        return(
            <Fragment>
                <div className="container">
                    <h1>File Input Here!</h1>
                    <MyDropzone/>
                </div>
            </Fragment>
        )
    }
}

export default Home;