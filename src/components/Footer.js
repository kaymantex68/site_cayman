import React, { useState, useEffect } from 'react';
import classes from './Footer.module.css'
import logo from '../Logo/logo.svg'
function Footer() {

    return (
        <div className={classes.Main}>
            <div className={classes.info}>
                <div className={classes.block}>
                    <p className={classes.Adress}> г.Тамбов, Агапкина 25А</p>
                    <p className={classes.Adress}> пн-вс 9:00-18:00</p>
                    <p className={classes.Adress}> +7 (920) 489-74-37</p>
                </div>
            </div>
            <div className={classes.Logo}>
                <img src={logo} />
            </div>

        </div>
    )
}

export default Footer;