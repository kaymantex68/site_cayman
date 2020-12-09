import React, { useContext } from 'react';
import classes from './DetailProduct.module.css'
import { Context } from '../../Context'
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);


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



    const slides = [];
    for (let i = 1; i < 5; i += 1) {

        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <div className={classes.Container_pic}>
                    <img

                        src={`/img_products/${DetailInfo.brand}/${DetailInfo.model}/${i}.png`}

                    />
                    {/* {console.log(`../img_products/${DetailInfo.brand}/${DetailInfo.model}/${i}.png`)} */}
                </div>
            </SwiperSlide>
        );
    }
    return (

        <div className={classes.ContainerDetail}>
            <div className={classes.Manual}>
                <div className={classes.Direct}>
                    <span className={classes.FastDirect}>catalog</span>

                    {console.log(match.params)}
                    {Object.keys(match.params).map((item, index) => {
                        if (match.params[item] != "undefined") {
                            return (
                                <>
                                    <span className={classes.FastDirectDot}> ᐅ </span>
                                    <NavLink to="#"><span className={classes.FastDirect}>{match.params[item]}</span></NavLink>

                                </>
                            )
                        }
                        else {
                            return (<></>)
                        }
                    })}
                </div>

            </div>

            <div className={classes.DescriptionConteiner}>
                <div className={classes.Romb1}></div>
                <div className={classes.Romb2}></div>
                <div className={classes.Block}>
                    <div className={classes.Picture}>


                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className={classes.Swiper_cont}
                        >
                            {slides}
                        </Swiper>





                    </div>
                    <div className={classes.Description}>
                        <p className={classes.info}>{DetailInfo.model}</p>
                        {Object.keys(DetailInfo.info).map((item, index) => {
                            return (
                                <div className={classes.String}>
                                    <div className={classes.Id}>
                                        <span className={classes.infoBold}>{DetailInfo.info[item][0]}</span>
                                    </div>
                                    <div className={classes.Text}>
                                        <span className={classes.info}>{DetailInfo.info[item][1]}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


        </div >

    )
}

export default DetailProduct;