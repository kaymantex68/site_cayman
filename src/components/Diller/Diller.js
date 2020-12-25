import React, { useState, useEffect, useContext } from 'react';
import classes from './Diller.module.css';
import i2 from './PicSlider/sib_arsenal_brand.png';
import { Data } from './DataDiler'

let DataDiller = [];

Data.map((item) => {
    return (
        DataDiller.push(item)
    )
})

console.log(DataDiller)


function Diller() {
    return (




        < div className={classes.Main} >
            <div className={classes.Text}>Дилеры</div>

            <div className={classes.Container}>
                {DataDiller.map((item, index) => {
                    return (
                    <a href={item.link}>
                        <div className={classes.Diller_container}>
                            <div className={classes.Diller}>
                                <div className={classes.Picture}>
                                    <img className={classes.Image} src={item.picture} />
                                </div>
                                <div className={classes.Text_item}>
                                    {item.LTD}
                                </div>
                            </div>
                        </div>
                        </a>

                    )
                })}
            </div>
        </div >


    )
}

export default Diller;