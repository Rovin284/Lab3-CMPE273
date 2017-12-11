import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';
//import TextField from 'material-ui/TextField';
import * as API from '../api/API';
import FileList from "./Welcome2";





class Welcome extends Component {

    static propTypes = {
        currentUser: PropTypes.string.isRequired,
        handleLogout: PropTypes.func.isRequired
        //images: PropTypes.array.isRequired
    };




    

    listFiles = () => {
        API.getImages()
            .then((data) => {
                this.setState({
                    images: data.resArray,
                    username: data.objectSession
                });
            });
    };






    constructor(props) {
        super(props);

        // Assign state itself, and a default value for

        this.state = {
            message: '',
            username: this.props.currentUser,
            images: [],
            filename: '',
            newfolder: false,
            newSharedfolder: false
        };


    }


    componentWillMount() {
        console.log('inside compnt will mount1', this.state.username);
        document.title = `Welcome, ${this.state.username} !!`;


        API.getImages()
            .then((data) => {
                this.setState({
                    images: data.resArray,
                    username: data.objectSession
                });
            });
        console.log('inside compnt will mount2', this.state.username);
    }

    componentDidMount() {


        console.log('inside compnt Did mount', this.state.username);


    }

    render() {
        var sty = {
            backgroundColor: '#FAFAFA',
            paddingBottom: 725,
            textAlign:'left',
            paddingRight:150
        };
        var button ={
            paddingLeft: 2,
            paddingRight:2,
            paddingTop:2,
            paddingBottom:2,
            backgroundColor:'#2E9AFE',
            color:'white'
        };
        return (

            <div className="row">
                <div className="col-md-2" style={sty}>
                    <div className="maestro-nav__container">
                        <div className="maestro-nav__panel">
                            <a className="maestro-nav__home-button" href="/welcome" data-reactid="11">
                                <img className="maestro-nav__logo"
                                     aria-label="Home" alt="Dropbox"
                                     src="https://cfl.dropboxstatic.com/static/images/index/rebrand/logos/glyphs/glyph_blue.svg"
                                     width="32px" height="32px" data-reactid="12"/>
                            </a>
                            <br/><br/>
                            <div className="maestro-nav__contents" data-reactid="13">
                                <ul className="maestro-nav__products" data-reactid="14">
                                    <li data-reactid="15">
                                        <div className="maestro-nav__product-wrapper" data-reactid="16">
                                    <span className="ue-effect-container" data-reactid="17">
                                        <a href="/welcome"
                                           className="maestro-nav__product maestro-nav__active-product" id="home"
                                           target="_self" rel="noopener" data-reactid="18">
                                            Home
                                        </a>
                                    </span>
                                        </div>
                                    </li>
                                    <li data-reactid="20">
                                        <div className="maestro-nav__product-wrapper" data-reactid="21">
                                    <span className="ue-effect-container" data-reactid="22">
                                        <a href="#" className="maestro-nav__product"
                                           id="files" target="_self" rel="noopener" data-reactid="23">
                                           User Accounts
                                        </a>
                                    </span>
                                        </div>
                                    </li>
                                   {/*<li data-reactid="25">*/}
                                        {/*<div className="maestro-nav__product-wrapper" data-reactid="26">*/}
                                     {/*<span className="ue-effect-container" data-reactid="27">*/}
                                       {/*<a href="#"*/}
                                          {/*className="maestro-nav__product" id="paper" target="_self" rel="noopener"*/}
                                          {/*data-reactid="28">*/}
                                       {/*Paper<input type='Button' style={button} value='New' className="btn" />*/}
                                       {/*</a>*/}
                                     {/*</span>*/}
                                        {/*</div>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-10">

                    <FileList handleStar={this.handleStar} newfolder={this.state.newfolder} images={this.state.images}
                              newSharedfolder={this.state.newSharedfolder} listFiles={this.listFiles} handleLogout={this.props.handleLogout}/>
                </div>
            </div>


        )
    }
}

export default withRouter(Welcome);
