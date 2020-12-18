import React from 'react';
import classes from '../components/UpHeader.module.css';

function UpHeader() {
    return (
        <div className={classes.Main}>
            <div className={classes.Container}>
                <div className={classes.Mail}><span className={classes.span_info}>info@kaymantex.ru</span></div>
                <div className={classes.Phone}><span className={classes.span_info}>Тел: 8 (4752) 42-47-27</span> <span className={classes.span_info}>Тел: +7 920 233-34-34</span> </div>
                
                <div className={classes.Info}><span className={classes.span_info}>Тамбов, ул.Агапкина 25А</span></div>
            </div>
        </div>
    )
};

export default UpHeader;