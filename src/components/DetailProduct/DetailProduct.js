import React, { useContext } from 'react';
import classes from './DetailProduct.module.css'
import { Context } from '../../Context'
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom'

function DetailProduct({ match }) {

    const { Data } = useContext(Context);
    let DataProducts = [];
    {
        Data.map((item, index) => {
            return (
                DataProducts.push(item)
            )
        })
    }
    const DetailInfo = DataProducts.find(x => x.id === match.params.model);
    // console.log('detail----------------------');
    // console.log(match);
    return (

        <div className={classes.ContainerDetail}>
            <div className={classes.Manual}>
                <div className={classes.Direct}>
                    <span className={classes.FastDirect}>catalog</span>
                    
                    {console.log(match.params)}
                    {Object.keys(match.params).map((item, index) => {
                        if (match.params[item]!="undefined") {
                            return (
                                <>
                                    <span className={classes.FastDirectDot}> ᐅ </span>
                                    <NavLink to="#"><span className={classes.FastDirect}>{match.params[item]}</span></NavLink>
                                    
                                </>
                            )
                        }
                        else{
                            return (<></>)}
                    })}
                </div>
              
            </div>
            <p className={classes.info}>{DetailInfo.model}</p>
            {Object.keys(DetailInfo.info).map((item, index) => {
                return (
                    <p className={classes.info}>{DetailInfo.info[item]}</p>
                )
            })}


        </div>

    )
}

export default DetailProduct;