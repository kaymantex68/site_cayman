
import React from 'react';
import classes from './ImgComp.module.css';
function ImgComp({ obj }) {

    let a = (
        <div>

            <img src={obj.pic} alt="slide-img" className={classes.IMG_SLIDE} />
            {obj.new ==true &&
                <div className={classes.New}><span className={classes.New_span}>новинка</span></div>
            }
            {obj.new ==true &&
               <div className={classes.Little_New}><span className={classes.New_span }>новинка</span></div>
            }
            <div className={classes.Slider_info_block_alpha}></div>
            <div className={classes.Slider_info_block}>
                <div className={classes.Text_information}>
                    {/* <span className={classes.Slider_text}></span> */}
                    <h3 className={classes.Slider_title}>{obj.title}</h3>
                    {Object.keys(obj.info).map((item, index) => {
                        return (
                            <p className={classes.Slider_p} key={index}>{obj.info[item]}</p>
                        )
                    })}
                    <h2 className={classes.Slider_coast}>{obj.coast}</h2>
                </div>
                <div className={classes.Button_link}>Подробнее</div>
            </div>
        </div>
    );
    return a;
}
export default ImgComp;