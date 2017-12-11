import React, {Component} from 'react';
//import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';
//import TextField from 'material-ui/TextField';
//aimport * as API from '../api/API';
import folderIcon1 from '../folder.png';


class SharedFolder extends Component {
    static propTypes = {

        createSharedFolder: PropTypes.func.isRequired
        //images: PropTypes.array.isRequired
    };

    constructor() {
        super();
        this.state = {
            sharedFolderName: '',
            userlist: ''
        }
    }

    render() {
        var upButton ={
            textAlign: 'Center',
            backgroundColor:'#205FDE',
            color:'white',
            align:'Right'
        };
        return (
            <div className={'row imageGridStyle'}>
                <div className={'col-md-1'}>
                </div>
                <div className={'col-md-4'}>
                <img alt="myImg" src={folderIcon1}/>
                <input placeholder={'Enter the Name'} value={this.state.sharedFolderName} onChange={(event) => {
                    this.setState({
                        sharedFolderName: event.target.value
                    });
                }}/>

                </div>
                <div className={'col-md-5'}>
                    <input placeholder={'Enter Email ID'} value={this.state.userlist} onChange={(event) => {
                        this.setState({
                            userlist: event.target.value
                        });
                    }}/>
                </div>
                <div className={'col-md-2'}>
                    <button className="btn" style={upButton}
                            type="submit"
                            onClick={this.props.createSharedFolder.bind(this, JSON.stringify(this.state))}>
                        Share
                    </button>
                <br/>
                <div className="myStyle-main4">
                    <hr/>
                </div>
                </div>
            </div>

    );
    }
    }

    export default SharedFolder;