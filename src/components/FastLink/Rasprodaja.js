import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import classes from './Rasprodaja.module.css'
import { Context } from '../../Context'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);





function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        };
        window.addEventListener("resize", handleResize);
    }, []);
    if (window.innerWidth > 1700) { return 8 }
    if (window.innerWidth < 1700 && window.innerWidth > 1500) { return 7 }
    if (window.innerWidth < 1500 && window.innerWidth > 1400) { return 6 }
    if (window.innerWidth < 1400 && window.innerWidth > 1100) { return 5 }
    if (window.innerWidth < 1100 && window.innerWidth > 900) { return 4 }
    if (window.innerWidth < 900 && window.innerWidth > 600) { return 3 }
    if (window.innerWidth < 600) { return 2 }
    // return size;
}



function LiderOfSale() {

    const { Modal, OpenModal, Data, IdModel } = useContext(Context);

    function handleClick(model) {
        IdModel(model);
    }

    let slideArr = [];
    {
        Data.map((item, index) => {
            return (
                slideArr.push(item)
            )
        })
    }
    return (



        // <div className={classes.Main}>
        <div className={classes.Slider_Conteiner}>
            <Swiper

                spaceBetween={2}
                slidesPerView={useWindowSize()}
                // navigation
                pagination={{ clickable: true }}
                //  scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                loop={true}
                autoplay={{
                    delay: 5000,
                    // disableOnInteraction: true,
                }}
                className={classes.Swiper_cont}
            >
                {slideArr.map((item, index) => {
                    return (
                        <>
                            {item.rasprodaja &&
                                < SwiperSlide key={index} className={classes.SwiperSlide} >

                                    <Link to={`/${item.id}`}>
                                        <div className={classes.Lider_card} >

                                            <div className={classes.Lider_pic}>
                                                {/* {console.log(this.info)} */}
                                                {/* <img src={item.pic} /> */}
                                                <img src={`/img_products/${item.brand}/${item.model}/1.png`} />
                                                <div className={classes.Back_pic}></div>
                                                {item.pic_brand != false ?
                                                    <><div className={classes.Brand}>
                                                        <img src={item.pic_brand} />
                                                    </div></> : null}
                                            </div>

                                            <div className={classes.Lider_text}>
                                                <h1 className={classes.Model}> {item.model}</h1>
                                                <p> {item.type[0]}</p>
                                                <p> {item.info.text}</p>
                                                <p> {item.info.text1[0]}  {item.info.text1[1]}</p>

                                                {item.inStock_outStock==1 &&
                                                    <p className={classes.Stock_true}><span className={classes.Stock_span_true}>в наличии</span></p>
                                                }
                                                {!item.inStock_outStock &&
                                                    <p className={classes.Stock_false}><span className={classes.Stock_span_false}>под заказ</span></p>
                                                }
                                                {item.inStock_outStock==2 &&
                                                    <p className={classes.Stock_soon}><span className={classes.Stock_span_soon}>ожидается поступление</span></p>
                                                }
                                                <h1 className={classes.Coast}>
                                                    {item.old_coast != false ?
                                                        <><span className={classes.Old_coast} >{`${item.old_coast}₽`}</span><span className={classes.New_coast}>{`${item.coast}₽`}</span></> :
                                                        `${item.coast}₽`}
                                                </h1>
                                            </div>
                                            {/* <div className={classes.Lider_card_click} onClick={(e) => {handleClick(item)}} Model={item.model}></div> */}

                                        </div>

                                    </Link>

                                </SwiperSlide>
                            }
                        </>
                    );
                })}
            </Swiper>
        </div >
        // </div>
    );
}

export default LiderOfSale;