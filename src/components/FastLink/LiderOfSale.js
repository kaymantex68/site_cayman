import React, { useState } from 'react';
import classes from './LiderOfSale.module.css'
import { LiderOfSaleData } from './LiderOfSaleData'


import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


let slideArr = [];
{
    LiderOfSaleData.map((item, index) => {
        return (
            slideArr.push(item)
        )
    })
}

// {
//     slideArr.map(e => {
//         return (
//             Object.keys(e.info).map((item, index) => {
//                 return (
//                     console.log(e.info[item])
//                 )
//             }),
//             console.log('----------------------')
//         )
//     });
// }




function LiderOfSale() {
    return (

        <div className={classes.Main}>
            <div className={classes.Slider_Conteiner}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className={classes.Swiper_cont}
                >
                    {slideArr.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={classes.SwiperSlide}>
                                <div className={classes.Lider_card}>

                                    <div className={classes.Lider_pic}>
                                        
                                        <img src={item.pic} />
                                        <div className={classes.Back_pic}></div>
                                    </div>

                                    <div className={classes.Lider_text}>
                                        <h1 className={classes.Model}> {item.model}</h1>
                                        <p> {item.type}</p>
                                        <p> {item.info.text}</p>
                                        {/* {
                                    Object.keys(item.info).map((key, index) => {
                                        return (
                                            <p>{item.info[key]}</p>
                                        )
                                    })
                                } */}
                                        <h1 className={classes.Coast}> {item.coast}</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default LiderOfSale;