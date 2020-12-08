import React, { useContext } from 'react';
import classes from './DetailProduct.module.css'
import { Context } from '../../Context'

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