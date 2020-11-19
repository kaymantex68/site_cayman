
import React from 'react';
import classes from '../components/ImgComp.module.css';
function ImgComp({ src,text }) {

    let a = (
        <div>
            {/* <img src={src} alt="slide-img" style={imgStyles}></img> */}
            <img src={src} alt="slide-img" className={classes.IMG_SLIDE} />
            <div className={classes.Slider_info_block_alpha}></div>
            <div className={classes.Slider_info_block}><span className={classes.Slider_text}>
            <p>{text}</p>
            <p></p>
            <p>{text}</p>
            </span></div>
        </div>
    );
    return a;
}
export default ImgComp;