import React from 'react';
import './SideDrawer.css';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';import GroupSharpIcon from '@material-ui/icons/GroupSharp';
import SettingsApplicationsSharpIcon from '@material-ui/icons/SettingsApplicationsSharp';
const sideDrawer = props => {
    let drawerClasses ='side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    const icons = {
        HomeSharpIcon : <HomeSharpIcon/>,
        GroupSharpIcon:<GroupSharpIcon/>,
        SettingsApplicationsSharpIcon:<SettingsApplicationsSharpIcon/>
    }
    
    return (
    <nav className ={drawerClasses}>
     <ul> {props.items.map(row=>(
            <li><a href ={`/${row.href}`}>{icons[row.style]} {row.value}</a></li> ))}
      </ul>


    </nav>
    );


};

export default sideDrawer;