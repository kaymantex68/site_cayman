import React, { useState, useEffect } from 'react';
import classes from './Footer.module.css'
import logo from '../Logo/LogoCopyright.svg'
import instagramLogo from '../Logo/instagram.svg'
import vkLogo from '../Logo/vk.svg'
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
            <div className={classes.Social}>
            
                <a className={classes.inst} href="https://www.instagram.com/cayman_security/">
                <span>Instagramm</span>
                    <img className={classes.Icon} src={instagramLogo} />
                </a>
                {/* <img className={classes.Icon} src={vkLogo} /> */}
            </div>
            <div className={classes.Logo}>

                <img src={logo} />
            </div>

        </div>
    )
}

export default Footer;