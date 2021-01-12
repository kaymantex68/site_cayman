import React from 'react'
import classes from './ProductsCard.module.css'

const ProductCard = (model) => {
    return (
        <div className={classes.product_card_container} >
            <div className={classes.product_card_container_picture}>
                {
                    model.akciya && <div className={classes.Akciya_container}>
                        <span className={classes.Akciya_span}>{`${model.akciya}`}</span>
                        <img  src={model.pic_akciya} className={classes.Pic_akcia} />
                    </div>
                }
                <img src={`/img_products/${model.brand}/${model.model}/1.png`} />
                {model.pic_brand !== false ?
                    <><div className={classes.Brand}>
                        <img src={model.pic_brand} />
                    </div></> : null}
            </div>
            <div className={classes.product_card_container_info}>
                <h1 className={`${classes.product_card_container_info_model} ${classes.padding_bottom}`} style={{ fontSize: model.small_item }}> {model.model}</h1>
                <p className={`${classes.product_card_container_description} ${classes.bold_text}`}> {model.type[0]}</p>
                <p className={classes.product_card_container_description}> {model.info.text}</p>
                <p className={classes.product_card_container_description}> {model.info.text1[0]}  {model.info.text1[1]}</p>

                {model.inStock_outStock === 1 &&
                    <p className={classes.Stock_true}><span className={classes.Stock_span_true}>в наличии</span></p>
                }
                {!model.inStock_outStock &&
                    <p className={classes.Stock_false}><span className={classes.Stock_span_false}>под заказ</span></p>
                }
                {model.inStock_outStock === 2 &&
                    <p className={classes.Stock_soon}><span className={classes.Stock_span_soon}>ожидается поступление</span></p>
                }
                <h1 className={classes.Coast}>
                    {model.old_coast !== false ?
                        <><span className={classes.Old_coast} >{`${model.old_coast} руб.`}</span><span className={classes.New_coast}>{` ${model.coast} руб.`}</span></> :
                        `${model.coast} руб.`}
                </h1>
            </div>
            <div className={classes.product_card_container_button}><span className={classes.product_card_container_button_span}>в корзину</span></div>
        </div >
    )
}

export default ProductCard;


