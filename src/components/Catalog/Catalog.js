import React, { useContext } from 'react';
import classes from './Catalog.module.css'
import { Context } from '../../Context'
import CatalogContainer from './CatalogContainer'
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom'


function Catalog({ match }) {
    return (
        <>
            <div className={classes.Main}>
                <div className={classes.Manual}>
                    <div className={classes.Direct}>
                    <span className={classes.FastDirect}>каталог</span>
                    
                        {Object.keys(match.params).map((item, index) => {
                            return (
                                <>
                                    <span className={classes.FastDirectDot}> ᐅ </span>
                                    <NavLink to="#"><span className={classes.FastDirect}>{match.params[item]}</span></NavLink>
                                    
                                </>
                            )
                        })}
                    </div>
                    <div className={classes.FilterContainer}><span className={classes.FilterText}>Отсортировать - - - - по цене - - - - по популярности</span></div>
                </div>

                <div className={classes.Container}>
                    <CatalogContainer match={match} />
                </div>
            </div>
        </>
    )
}

export default Catalog;