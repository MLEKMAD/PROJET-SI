import React from 'react';
import { Toolbar } from '@material-ui/core';
import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
const toolbar = props =>(
    <header className = "toolbar">
        <nav className = "toolbar_navigation">
            <div>
                <DrawerToggleButton click ={props.drawerClickHandler}/>
            </div>
            <div className = "toolbar_logo"> <a href="/"> THE LOGO</a></div>
            <div className ="spacer"></div>
            <div className ="toolbar_navigation-items">
                <ul>
                    <li> <a href="/">Requests</a> </li>
                    <li> <a href="/">Team</a> </li>
                    <li> <a href="/">Settings</a> </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;