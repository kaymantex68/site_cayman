import React, { useContext } from 'react';
import classes from './Catalog.module.css'
import { Context } from '../../Context'
import CatalogContainer from './CatalogContainer'

function Catalog({ match }) {
    return (
        <>
            <div className={classes.Main}>
                <div className={classes.Manual}></div>
                <div className={classes.Container}>
                    <div className={classes.Left}></div>
                    <div className={classes.Catalog}>
                        <div className={classes.Centre}>
                            <CatalogContainer match={match} />
                        </div>
                    </div>
                    <div className={classes.Right}></div>
                </div>
            </div>
        </>
    )
}

export default Catalog;