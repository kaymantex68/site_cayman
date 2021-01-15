import React from 'react'
import classes from './CartDetail.module.css'
import ProductCardInCart from './ProductCardInCart'

const CartDetail = (props) => {
    const { cartUniq, cartSumm } = props;
    const { clearCart } = props;
    console.info('CART DETAIL PROPS: ', props)
    // console.info('CART DETATIL: ', cartUniq)
    return (
        <div className={classes.CartDetail_container}>
            <div className={classes.CartDetail_block}>
                <div className={classes.CartDetail_global_operation}>
                    <span className={classes.Summa_fixed}>{`сумма: ${cartSumm} руб.`}</span>
                    <span className={classes.Remove_all_button_span} onClick={() => clearCart([])}>очистить корзину</span>
                </div>
                <div className={classes.CartDetail_container_list_products}>
                    {cartUniq.map((product, key) => {
                        return (
                            <ProductCardInCart key={`Product_${key}`} {...product} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CartDetail;