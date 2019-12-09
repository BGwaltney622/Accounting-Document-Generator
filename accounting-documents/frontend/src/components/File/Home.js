import React, { Component, Fragment } from 'react';
import FileList from "./FileList";
import FileForm from "./FileForm";


export class Home extends Component {

    render() {
        return(
            <Fragment>
                <div className="container">
                    <FileForm />
                    <FileList />
                </div>
            </Fragment>
        )
    }
}

export default Home;