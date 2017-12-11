import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import DropboxHomeLogo from '../images/dropboxlogo.png';
import DropboxHomeImg from '../images/DropboxHomeImg.png';

class Login extends Component {
    static propTypes = {
    handleSubmit: PropTypes.func.isRequired
    };

    state = {
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        signIn: true

    };


    componentWillMount() {
        this.setState({
            username: '',
            password: ''
        });

    }



    renderSignIn() {

        var myStyle = {
            textAlign:'left',
            fontSize: 20
        };
        var myStyle2 = {
            textAlign:'left',
            fontSize: 13
        };
        var myStyle1 = {
            textAlign:'right',
            fontSize: 13
        };
        var sty = {
            float:'left'
        };
        var sty2 = {
            float:'right'
        };
        var wrongPwd ={
            color:'Red'
        };
        return (
            <div>
                <div className="row justify-content-md-center">
                    <header className="mast-head">
                            <img src={DropboxHomeLogo} width='270' height='80' />
                    </header>
                </div>

                <br/><br/><br/><br/><br/><br/>


                <div className="row justify-content-md-center">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-4">
                        <img src={DropboxHomeImg} width='300' height='350'/>
                    </div>

                    <div className="col-md-3">

                        <form>
                            <div className="login-register-switch">
                                <label className="login-register-switch-link"
                                       onClick={()=>{
                                        this.setState({
                                            signIn: false
                                        });
                                    }
                                    }
                                >
                                    or create an account
                                </label>


                            </div>

                            <br/>
                            <div className="form-group">
                                <hr/>
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Username"
                                    placeholder="Email"
                                    value={this.state.username}
                                    onChange={(event) => {
                                        this.setState({
                                            username: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="password"
                                    label="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={(event) => {
                                        this.setState({
                                            password: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <br/>
                                        <input className="checkbox_label" type="checkbox" id="cb" name="remember me"/>

                                        <label className="checkbox_label">Remember me</label>
                                    </div>
                                    <div className="col-md-6">
                                        <br/>
                                        <button
                                            className="btn btn-primary Sign-in-button"
                                            type="button"
                                            onClick={this.props.handleSubmit.bind(this,(this.state))}>
                                            Sign in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           /* <div>
                <div className="panel-body"><img src={DropboxHomeLogo} width='270' height='80' /></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-4">
                            <img src={DropboxHomeImg} width='300' height='400'/>
                        </div>
                        <div className="col-md-3">
                            <h4 style={myStyle}>Sign in</h4>
                            <h4 style={myStyle1}> or <a href='/Signup'>create an account</a></h4>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
                                           value={this.state.email} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"
                                           value={this.state.password} onChange={this.handlePasswordChange} />
                                </div>
                                <div className="checkbox">
                                    <label style={sty}><input style={myStyle2} type="checkbox" name="remember" />Remember me</label>
                                    <button type="submit" className="btn btn-primary" style={sty2} >Sign in</button><br/><br/>
                                </div>
                            </form>
                            <div><a href='#'> <h4 style={myStyle2}>Forgot your password?</h4></a></div>
                            <br/><br/> <h3 style={wrongPwd}>{this.state.message}</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-9">
                        <hr/>
                    </div>
                </div>
            </div>*/
        );


    }

    renderSignUp() {


        return (
            <div>
                <div className="row justify-content-md-center">
                    <span className="dropbox-2015 dropbox-logo-2015 container">
                    <header className="mast-head">
                        <nav className="mast-head__nav mast-head-nav">
                            <img
                                src="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_logo_glyph_2015_m1-vfleInWIl.svg"
                                alt="" className="dropbox-logo__glyph"/>

                            <img
                                src="https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_logo_text_2015_m1-vflV-vZRB.svg"
                                alt="" className="dropbox-logo__type"/>
                        </nav>
                        </header>
                    </span>
                </div>

                <br/><br/><br/><br/><br/><br/>


                <div className="row justify-content-md-left">
                    <div className="col-md-6">
                        <img
                            src="https://cfl.dropboxstatic.com/static/images/empty_states/rebrand_m1/sign-in-illo-vfl_t3XMB.png"

                            alt="" className="login-or-register-img"/>
                    </div>

                    <div className="col-md-4">

                        <form>
                            <div className="form-group">
                                <div className="login-register-header">Create an account</div>
                            </div>
                            <div className="login-register-switch">
                                <label onClick={()=>{
                                    this.setState({
                                        signIn: true
                                    });}}
                                       className="login-register-switch-link">
                                        or log in
                                </label>
                            </div>

                            <br/>
                            <div className="form-group">
                                <hr/>
                                <input
                                    className="form-control"
                                    type="text"
                                    label="FirstName"
                                    placeholder="First name"
                                    value={this.state.firstname}
                                    onChange={(event) => {
                                        this.setState({
                                            firstname: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <hr/>
                                <input
                                    className="form-control"
                                    type="text"
                                    label="LastName"
                                    placeholder="Last name"
                                    value={this.state.lastname}
                                    onChange={(event) => {
                                        this.setState({
                                            lastname: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <hr/>
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={(event) => {
                                        this.setState({
                                            email: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="password"
                                    label="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={(event) => {
                                        this.setState({
                                            password: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <br/>
                                        <input className="checkbox_label" type="checkbox" id="cb" name="remember me"/>

                                        <label className="checkbox_label"> I agree to dropbox terms.</label>
                                    </div>
                                    <div className="col-md-6">
                                        <br/>
                                        <button
                                            className="btn btn-primary Sign-in-button"
                                            type="button"
                                            onClick={this.props.handleCreateAccount.bind(this, JSON.stringify(this.state))}>
                                            Create an account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );


    }


    render() {
        if (this.state.signIn) {

            return this.renderSignIn();
        } else {
            return this.renderSignUp();
        }
    }

}


export default Login;