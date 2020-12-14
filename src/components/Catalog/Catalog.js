import React from 'react';
import classes from './Catalog.module.css'
import CatalogContainer from './CatalogContainer'
import { Link } from 'react-router-dom'


function Catalog({ match }) {

    return (
        <>
            <div className={classes.Main}>
                <div className={classes.Manual}>
                    <div className={classes.Direct}>
                        <span className={classes.FastDirect}>каталог</span>
                        {console.log(match)}
                        {Object.keys(match.params).map((item, index) => {
                            return (
                                <>
                                    <span className={classes.FastDirectDot}> ᐅ </span>
                                    <Link to={`/catalog/${Object.keys(match.params).map((item, index) => {
                                      
                                        return (`${match.params[item]}/`);
                                    })
                                        }`} key={`cat-nav-${index}`}><span key={`cat-sp-${index}`} className={classes.FastDirect}>{match.params[item]}</span></Link>

                                </>
                            )
                        })}
                    </div>
                    <div className={classes.FilterContainer}>
                        {/* <span className={classes.FilterText}>отсортировать </span> */}
                        <input className={classes.InputSort} type="text" name="name" placeholder="Отсортировать" />
                    </div>
                </div>

                <div className={classes.Container}>
                    <div className={classes.Romb1}></div>
                    <div className={classes.Romb2}></div>
                    <CatalogContainer match={match} />
                </div>
            </div>
        </>
    )
}

export default Catalog;