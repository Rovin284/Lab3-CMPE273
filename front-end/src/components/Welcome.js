import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import { Route, withRouter } from 'react-router-dom';

class Welcome extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired,
        handleLogout: PropTypes.func.isRequired
    };

    state = {
        username : '',
        path:'',
        allfiles:[]
    };

    handleDirSubmit = (userdata) => {
        console.log(userdata);
        API.ListDir(userdata)
            .then((res) => {
                if (res) {
                    API.getFiles()
                        .then((data) => {
                            this.setState({
                                allfiles: 'Files: \n'+data
                            });
                            console.log("ALL FILES FROM DIR" + data);
                        });

                } else if (res.status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };


    componentWillMount(){
        this.setState({
            username : this.props.username
        });
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
    }

    render(){
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <div className="alert alert-warning" role="alert">
                        {this.state.username}, welcome to my App..!!
                    </div>
                    <form>
                        <div className="form-group">
                            <h3>Path of directory:</h3>
                            <input
                                className="form-control"
                                type="text"
                                label="Path"
                                placeholder="Path Of The Directory"
                                value={this.state.path}
                                onChange={(event) => {
                                    this.setState({
                                        path: event.target.value
                                    });
                                }}
                            />
                        </div>
                    </form>
                    <div>
                        <h4></h4>
                        {this.state.allfiles}
                    </div>
                    <div className="form-group">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => this.handleDirSubmit(this.state)}>
                            Submit
                        </button>
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => this.props.handleLogout(this.state)}>
                            Logout
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Welcome);