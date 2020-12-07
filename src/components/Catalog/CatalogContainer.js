import React, { useContext } from 'react';
import classes from './CatalogContainer.module.css'
import { Context } from '../../Context'


function CatalogContainer({ match }) {
    const { Data } = useContext(Context);
    let DataCatalog = [];
    {
        Data.map((item, index) => {
            return (
                DataCatalog.push(item)
            )
        })
    }
    const ProductDisplay = (product, index) => {
        return (
            <>
                <div className={classes.Product_container}>
                    <div>{product.model}</div>
                </div>
            </>
        )
    }

    if (match.params.brand != null) {
        return (
            <div className={classes.Main}>
                {
                    DataCatalog.map((item, index) => {
                        if ((item.type[1] == match.params.cat) && (item.type[2] == match.params.type) && (item.brand == match.params.brand)) {
                            return (
                                 ProductDisplay(item) 
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
                <div className={classes.Main}>
                    {
                        DataCatalog.map((item, index) => {
                            if ((item.type[1] == match.params.cat) && (item.type[2] == match.params.type)) {
                                return (
                                    ProductDisplay(item)

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
                <div className={classes.Main}>
                    {
                        DataCatalog.map((item, index) => {
                            if (item.type[1] == match.params.cat) {
                                return (
                                    ProductDisplay(item)
                                )
                            }
                        })
                    }
                </div>
            </>
        )
    }

    return (
        <div>общий каталог</div>
    )
}

export default CatalogContainer;