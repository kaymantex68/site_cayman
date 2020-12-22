import React from 'react';
import classes from '../components/UpHeader.module.css';

function UpHeader() {
    return (
        <div className={classes.Main}>
            <div className={classes.Container}>
                <div className={classes.Mail}><span className={classes.span_info}>info@kaymantex.ru</span></div>
                <div className={classes.Phone}><span className={classes.span_info}>8 (4752) 42-47-27</span> <span className={classes.span_info}>+7 920 233-34-34</span> </div>
                <div className={classes.Raspisanie}><span className={classes.span_info}>пн-пт 9:00-18:00</span> <span className={classes.span_info}>сб 9:00-16:00 / вс выходной</span> </div>
                <div className={classes.Info}><span className={classes.span_info}>Тамбов, ул.Агапкина 25А</span></div>
            </div>
            <div className={classes.Container_kol_tovarov}>колво товаров</div>
        </div>
    )
};

export default UpHeader;