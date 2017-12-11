import React, {Component} from 'react';
//import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';
import newfolderIcon from '../folder.png';


class NewFolder extends Component {

    static propTypes = {

        createFolder: PropTypes.func.isRequired
        //images: PropTypes.array.isRequired
    };
    constructor() {
        super();
        this.state = {
            folderName: ''
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
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-9">
                <img alt="myImg" src={newfolderIcon}/>
                <input
                    placeholder={'Enter the Name'}
                    value={this.state.folderName} onChange={(event) => {
                    this.setState({
                        folderName: event.target.value
                    });
                }}/>
                </div>
                <div className="col-md-2">
                <button
                    className="btn" style={upButton}
                    type="submit"
                    onClick={this.props.createFolder.bind(this,JSON.stringify(this.state))}>
                    Create folder
                </button>
                </div>
                <br/><div className="myStyle-main4"><hr/></div>

            </div>

        );
    }
}
export default NewFolder;