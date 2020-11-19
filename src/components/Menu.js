import React from 'react';
import classes from '../components/Menu.module.css';
function Menu(){
    return(   
        <div className={classes.Main}>
          <ul className={classes.Ul_top}>
                <li className={classes.Li_menu}><span className={classes.span_Link}>О компании</span></li>
                <li className={classes.Li_menu}><span className={classes.span_Link}>Каталог</span></li>
                <li className={classes.Li_menu} ><span className={classes.span_Link}>Услуги</span></li>
                <li className={classes.Li_menu} ><span className={classes.span_Link}>Тех.поддержка</span></li>
                <li className={classes.Li_menu} ><span className={classes.span_Link}>Контакты</span></li> 
            </ul>
        </div>
    )
};

export default Menu;