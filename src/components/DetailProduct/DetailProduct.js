import React, { useContext } from 'react';
import classes from './DetailProduct.module.css'


function DetailProduct({match}){
    console.log('detail----------------------');
    console.log(match);
    return(
        
        <div className={classes.ContainerDetail}>
                проверка проверка
        </div>
        
    )
}

export default DetailProduct;