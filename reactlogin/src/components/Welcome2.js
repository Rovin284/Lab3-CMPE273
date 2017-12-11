import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as API from '../api/API';
import folderIcon from '../folder.png';
import NewFolder from "./NewFolder";
import NewSharedFolder from "./SharedFolder";
import Icon from '../FolderIcon.png';
import NewFolder1 from '../NewFolder.png';


class Welcome2 extends Component {

    static propTypes = {
        images: PropTypes.array.isRequired,
        listFiles: PropTypes.func.isRequired,
        handleLogout: PropTypes.func.isRequired


    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            images: [],
            filename: '',
            starredfile: [],
            imageStarred: false,
            newfolder: false,
            newSharedfolder: false

        }
    }

    componentWillMount() {
        API.getImages()
            .then((data) => {
                this.setState({
                    images: data.resArray,
                    username: data.objectSession,
                    imageStarred: data.resArray.starred
                });
            });
    }

    handleFileUpload = (event) => {
        console.log("----- Inside UPLOAD -----");
        const payload = new FormData();
        payload.append('username', this.state.username);
        payload.append('mypic', event.target.files[0]);
        API.uploadFile(payload)
            .then((status) => {
                if (status === 201) {
                    API.getImages()
                        .then((data) => {
                            this.setState({
                                images: data.resArray
                            });
                        });
                }
            });
    };

    handleDelete = (payload) => {
        console.log("----- Inside Delete -----");
        API.deleteFile(payload)
            .then((status) => {
                if (status === 201) {
                    API.getImages()
                        .then((data) => {
                            this.setState({
                                images: data.resArray,
                                username: data.objectSession,
                                imageStarred: data.resArray.starred
                            });
                        });
                }
            });

    };

    createFolder = (payload) => {
        console.log("----- Inside create folder -----");
        API.createFolder(payload)
            .then((status) => {
                if (status === 201) {
                    API.getImages()
                        .then((data) => {
                            this.setState({
                                images: data.resArray,
                                newfolder: false
                            });
                        });
                }
            });
    };

    createSharedFolder = (payload) => {
        console.log("----- Inside shared folder -----");
        API.createSharedFolder(payload)
            .then((status) => {
                if (status === 201) {
                    API.getImages()
                        .then((data) => {
                            this.setState({
                                images: data.resArray,
                                newSharedfolder: false

                            });
                        });
                }
            });
    };

    handleStarred = (payload) => {
        console.log("----- Inside Star -----");
        this.state.starredfile.push(payload[0]);
    };

    handleUnStarred = (payload) => {
        console.log("----- Inside Unstar -----");

        this.state.starredfile.pop(payload[0]);

    };


    render() {
        const classes = this.props;
        var logoutSty ={
            paddingTop: 10,
            paddingLeft:90
        };
        var folder ={
            paddingTop: 0,
            paddingRight:85,
            color:'#0070e0'
        };

        var folder1 ={
            paddingTop: 0,
            paddingRight:40,
            width:200,
            color:'#0070e0'
        };

        var upButton ={
            textAlign: 'Center',
            paddingLeft:50,
            paddingRight: 50,
            backgroundColor:'#205FDE',
            color:'white'
        };
        var sty1 = {
            paddingTop: 10
        };
        var sty2 ={
            paddingBottom:20
        }

        return (

            <div className={classes.root}>
                <div className="row">
                    <div className="col-md-8 imageGridStyle ">
                        {/*<div className="input-group stylish-input-group">*/}
                            {/*<input type="text" className="form-control"  placeholder="Search"/>*/}
                            {/*<span className="input-group-addon">*/}
                                        {/*<button type="submit">*/}
                                            {/*<span className="glyphicon glyphicon-search"></span>*/}
                                        {/*</button>*/}
                                    {/*</span>*/}
                        {/*</div>*/}
                        <h3 className="myStyle-main">Home</h3><br/>
                        {/*<h5 className="myStyle-main2">Starred</h5>*/}
                        {/*{this.state.starredfile.map(tile => (*/}

                            {/*<div className="imageGridStyle " key={tile.img}>*/}
                                {/*<a className="myStyle-main3" href={'http://localhost:3001/' + tile.img}*/}
                                   {/*alt={'myimage'}>*/}
                                    {/*<img alt="myImg" src={folderIcon}/>{tile.myfileName}</a>*/}
                                {/*<svg onClick={() => {*/}
                                    {/*this.setState({});*/}
                                    {/*this.handleUnStarred([{*/}
                                        {/*img: tile.img,*/}
                                        {/*cols: 2,*/}
                                        {/*myfileName: tile.myfileName,*/}
                                        {/*starred: tile.starred*/}
                                    {/*}])*/}
                                {/*}} width="32" height="32" className="playStarred">*/}
                                    {/*<path*/}
                                        {/*d="M16 20.95l-4.944 2.767 1.104-5.558L8 14.312l5.627-.667L16 8.5l2.373 5.145 5.627.667-4.16 3.847 1.104 5.558z">*/}
                                    {/*</path>*/}
                                {/*</svg>*/}
                                {/*<div className="download-button">*/}
                                    {/*<div>*/}
                                        {/*<div className="dropdown">*/}
                                                {/*<span className="bold dropdownOption" data-toggle="dropdown" style={sty2}>*/}
                                                    {/*...*/}
                                                {/*</span>*/}

                                            {/*<ul className="dropdown-menu">*/}
                                                {/*<li className={'ddleft'}><a href={'http://localhost:3001/' + tile.img}*/}
                                                                            {/*download> Download </a></li>*/}
                                                {/*<li className={'ddleft'}><a onClick={() => {*/}
                                                    {/*this.handleDelete({"path_to_delete": tile.img})*/}
                                                {/*}}>Delete...</a></li>*/}
                                            {/*</ul>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                                {/*<br/>*/}
                                {/*<div className="myStyle-main4">*/}
                                    {/*<hr/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*))}*/}
                        {/*<div className="myStyle-main4">*/}
                            {/*<hr/>*/}
                        {/*</div>*/}
                        {/*<br/>*/}
                        {/*<div className="myStyle-main4">*/}
                            {/*<hr/>*/}
                        {/*</div>*/}
                        <h5 className="myStyle-main2">Recent</h5>
                        <div className="myStyle-main4">
                        </div>
                        <div>
                            {
                                this.state.newfolder
                                    ? <NewFolder createFolder={this.createFolder}/>
                                    : null
                            }
                        </div>

                        <div>
                            {
                                this.state.newSharedfolder
                                    ? <NewSharedFolder createSharedFolder={this.createSharedFolder}/>
                                    : null
                            }
                        </div>

                        {
                            this.state.images.map(tile => (

                                <div className="imageGridStyle toggleVisibility" key={tile.img} cols={tile.cols || 1}>
                                    <br/>
                                    <a className="myStyle-main3" href={'http://localhost:3001/' + tile.img}
                                       alt={'myimage'}>
                                        <img alt="myImg" src={folderIcon}/>{tile.myfileName}</a>
                                    {
                                        tile.starred
                                            ? <svg onClick={() => {
                                                tile.starred = !tile.starred;
                                                this.setState({
                                                    imageStarred: !this.state.starredfile.starred
                                                });
                                                this.handleUnStar([{
                                                    img: tile.img,
                                                    cols: 2,
                                                    myfileName: tile.myfileName,
                                                    starred: tile.starred
                                                }])

                                            }} width="32" height="32" className="play">
                                                <path
                                                    d="M16 20.95l-4.944 2.767 1.104-5.558L8 14.312l5.627-.667L16 8.5l2.373 5.145 5.627.667-4.16 3.847 1.104 5.558z">
                                                </path>
                                            </svg>
                                            : <svg onClick={() => {
                                                tile.starred = !tile.starred;
                                                this.setState({
                                                    imageStarred: !this.state.starredfile.starred
                                                });
                                                this.handleStarred([{
                                                    img: tile.img,
                                                    cols: 2,
                                                    myfileName: tile.myfileName,
                                                    starred: tile.starred
                                                }])
                                            }} width="32" height="32" className="play">
                                                <path d="M20.944 23.717L16 20.949l-4.944 2.768 1.104-5.558L8 14.312l5.627-.667L16 8.5l2.373 5.145 5.627.667-4.16 3.847 1.104 5.558zM17.66 17.45l1.799-1.663-2.433-.289L16 13.275l-1.026 2.224-2.433.289 1.799 1.663-.478 2.403L16 18.657l2.138 1.197-.478-2.403z">
                                                </path>
                                            </svg>
                                    }
                                    <div className="download-button">
                                        <span className="ddo" style={sty1}>
                                        Share
                                        </span>

                                        <div className="dropdown ">
                                                <span className="ddo1" data-toggle="dropdown" style={sty2}>
                                                    ...
                                                </span>

                                            <div className="dropdown-menu">
                                                <li className={'ddleft'}><a href={'http://localhost:3001/kafka-back-end/public' + tile.img}
                                                                            download> Download </a></li>
                                                <li className={'ddleft'}><a onClick={() => {
                                                    this.handleDelete({"path_to_delete": tile.img})
                                                }}>Delete...</a></li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                                <a href='/' onClick={this.props.handleLogout}><h4 style={logoutSty}>Logout</h4></a>
                                <br/><br/>

                                <div className="maestro-nav__contents">
                                    <ul className="maestro-nav__products">
                                        <div className="col-md-12"> <br/><br/></div>
                                        <label className="btn" style={upButton}>
                                            Upload Files<input type="file" hidden onChange={this.handleFileUpload}/>
                                        </label><br/>
                                        <a>
                                            <li data-reactid="25" style={folder1}>
                                                <br/><span onClick={() => {
                                                this.setState({newSharedfolder: !this.state.newSharedfolder});
                                            }}><img alt="myImg" src={Icon}/> New Shared Folder</span>
                                            </li>
                                            <li data-reactid="20" style={folder}>
                                                <br/><span onClick={() => {
                                                this.setState({newfolder: !this.state.newfolder});
                                            }}><img src={NewFolder1} alt={'New Folder'}/> New Folder
                                        </span>

                                            </li>

                                        </a>

                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Welcome2;
