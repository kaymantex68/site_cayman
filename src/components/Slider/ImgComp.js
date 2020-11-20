
import React from 'react';
import classes from './ImgComp.module.css';
function ImgComp({ obj }) {

    let a = (
        <div>
           
            <img src={obj.pic} alt="slide-img" className={classes.IMG_SLIDE} />
            <div className={classes.Slider_info_block_alpha}></div>
            <div className={classes.Slider_info_block}>
                <div className={classes.Text_information}>
                <span className={classes.Slider_text}></span>
                <h3>{obj.title}</h3>
                {Object.keys(obj.info).map((item,index)=>{return(
                    <p key={index}>{obj.info[item]}</p>
                )})}
                <h3>{obj.coast}</h3>
                </div>
            </div>
        </div>
    );
    return a;
}
export default ImgComp;