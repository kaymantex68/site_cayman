import React from 'react';
import classes from './Catalog.module.css'

function Catalog({ match }) {

    console.log(match)
    if (match.params.cat != null) console.log(match.params.cat)
    if (match.params.type != null) console.log(match.params.type)
    if (match.params.brand != null) console.log(match.params.brand)

    if (match.params.brand != null) {
        return (
            <>
                <div className={classes.Main}>{match.params.brand}</div>
            </>
        )
    }
    if (match.params.type != null) {
        return (
            <>
                <div className={classes.Main}>{match.params.type}</div>
            </>
        )
    }
    if (match.params.cat != null) {
        return (
            <>
                <div className={classes.Main}>{match.params.cat}</div>
            </>
        )
    }
    return(
        <div className={classes.Main}>общий каталог</div>
    )
}

export default Catalog;