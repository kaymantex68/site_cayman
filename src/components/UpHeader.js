import React from 'react';
import classes from '../components/UpHeader.module.css';

function UpHeader() {
    return (
        <div className={classes.Main}>
            <div className={classes.Mail}><span>mail@kaymantex.ru</span></div>
            <div className={classes.Phone}><span>+7 (920) 489-74-37</span></div>
            <div className={classes.Info}></div>
        </div>
    )
};

export default UpHeader;