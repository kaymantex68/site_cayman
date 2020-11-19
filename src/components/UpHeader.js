import React from 'react';
import classes from '../components/UpHeader.module.css';

function UpHeader() {
    return (
        <div className={classes.Main}>
            <div className={classes.Mail}><span className={classes.span_info}>mail@kaymantex.ru</span></div>
            <div className={classes.Phone}><span className={classes.span_info}>Тел: +7 (920) 489-74-37</span></div>
            <div className={classes.Info}><span className={classes.span_info}>Тамбов, ул.Агапкина 25А</span></div>
        </div>
    )
};

export default UpHeader;