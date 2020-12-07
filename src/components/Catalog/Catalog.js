import React, { useContext } from 'react';
import classes from './Catalog.module.css'
import { Context } from '../../Context'

function Catalog({ match }) {
    const { Data } = useContext(Context);
    let DataCatalog = [];
    {
        Data.map((item, index) => {
            return (
                DataCatalog.push(item)
            )
        })
    }

    console.log(match)
    // if (match.params.cat != null) console.log(match.params.cat)
    // if (match.params.type != null) console.log(match.params.type)
    // if (match.params.brand != null) console.log(match.params.brand)

    if (match.params.brand != null) {
        return (
            <div className={classes.Main}>{match.params.brand}
                {
                    DataCatalog.map((item, index) => {
                        console.log(item.type[1] + ' ' + String(match.params.cat));
                        console.log(item.type[2] + ' ' + match.params.type);
                        console.log(item.brand + ' ' + match.params.barnd);
                        if ((item.type[1] == match.params.cat) && (item.type[2] == match.params.type) && (item.brand == match.params.brand)) {
                            return (
                                <div className={classes.Product_container}>
                                    <p>{item.model}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
    if (match.params.type != null) {
        return (
            <>
                <div className={classes.Main}>{match.params.type}
                    {
                        DataCatalog.map((item, index) => {
                            console.log(item.type[1] + ' ' + String(match.params.cat));
                            console.log(item.type[2] + ' ' + match.params.type);
                            console.log(item.brand + ' ' + match.params.barnd);
                            if ((item.type[1] == match.params.cat) && (item.type[2] == match.params.type)) {
                                return (
                                    <p>{item.model}</p>
                                )
                            }
                        })
                    }
                </div>
            </>
        )
    }
    if (match.params.cat != null) {
        return (
            <>
                <div className={classes.Main}>{match.params.cat}
                    {
                        DataCatalog.map((item, index) => {
                            console.log(item.type[1] + ' ' + String(match.params.cat));
                            if (item.type[1] == match.params.cat) {
                                return (
                                    <div className={classes.Product_container}>
                                        <p>{item.model}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </>
        )
    }

    return (
        <div className={classes.Main}>общий каталог</div>
    )
}

export default Catalog;