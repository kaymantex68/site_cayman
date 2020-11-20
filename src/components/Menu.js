import React from 'react';
import classes from '../components/Menu.module.css';
function Menu(){
    return(   
        <div className={classes.Main}>
          <ul className={classes.Ul_top}>
                <li className={classes.Li_menu}><span className={classes.span_Link}>о компании</span></li>
                <li className={classes.Li_menu}><span className={classes.span_Link}>каталог</span></li>
                <li className={classes.Li_menu} ><span className={classes.span_Link}>услуги</span></li>
                <li className={classes.Li_menu} ><span className={classes.span_Link}>тех.поддержка</span></li>
                <li className={classes.Li_menu} ><span className={classes.span_Link}>контакты</span></li> 
            </ul>
        </div>
    )
};

export default Menu;