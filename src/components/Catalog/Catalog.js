import React, { useContext } from 'react';
import classes from './Catalog.module.css'
import { Context } from '../../Context'
import CatalogContainer from './CatalogContainer'

function Catalog({ match }) {
    return (
        <>
            <div className={classes.Main}>
                <div className={classes.Manual}>фильтр и прочая лабуда</div>
                <div className={classes.Container}>
                    <CatalogContainer match={match} />
                </div>
            </div>
        </>
    )
}

export default Catalog;