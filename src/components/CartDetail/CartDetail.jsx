import React from 'react'
import classes from './CartDetail.module.css'


const CartDetail = (props) => {
    const { cartUniq } = props;
    console.info('CART DETAIL PROPS: ', props)
    console.info('CART DETATIL: ', cartUniq)
    return (
        <div className={classes.CartDetail_container}>
            {cartUniq.map((product, key) => {
                return (
                    <p key={key}>{`${product.model} ${product.count}`}</p>
                )
            })}
        </div>
    )
}

export default CartDetail;