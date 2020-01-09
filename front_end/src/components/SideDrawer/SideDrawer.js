import React from 'react';
import './SideDrawer.css';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';import GroupSharpIcon from '@material-ui/icons/GroupSharp';
import SettingsApplicationsSharpIcon from '@material-ui/icons/SettingsApplicationsSharp';
const sideDrawer = props => {
    let drawerClasses ='side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    
    
    return (
    <nav className ={drawerClasses}>
        <ul>
        <li><a href ="/"><HomeSharpIcon/> Request</a></li>
        <li><a href ="/"><GroupSharpIcon/> Team</a></li>
        <li><a href ="/"><SettingsApplicationsSharpIcon/> Settings</a></li>
        </ul>


    </nav>
    );


};

export default sideDrawer;