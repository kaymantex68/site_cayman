import React from 'react';
import classes from '../components/NavigationBar.module.css';
import Logo from '../Logo/logo.svg';
import Menu from './Menu'
function UpMenu(){
    return(   
        <div className={classes.Main}>
            <div className={classes.Logo}>
                <img src={Logo} className={classes.LogoClass}/>
            </div>

            <div className={classes.Menu_top}>
                 <Menu/>
            </div>
        </div>
    )
};

export default UpMenu;