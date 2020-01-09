import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses ='side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    
    
    return (
    <nav className ={drawerClasses}>
        <ul>
        <li><a href ="/">Request</a></li>
        <li><a href ="/">Team</a></li>
        <li><a href ="/">Settings</a></li>
        </ul>


    </nav>
    );


};

export default sideDrawer;