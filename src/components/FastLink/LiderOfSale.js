import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import classes from './LiderOfSale.module.css'
import { Context } from '../../Context'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);





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

    const {  Data } = useContext(Context);

    // function handleClick(model) {
    //     IdModel(model);
    // }

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
                    disableOnInteraction: true,

                }}
                className={classes.Swiper_cont}
            >
                {slideArr.map((item, index) => {
                    return (
                        <>
                            {item.lider &&
                                < SwiperSlide key={index} className={classes.SwiperSlide} >

                                    <Link key={`lider-link-${index}`} to={`/${item.id}`}>
                                        <div key={`lider-div-${index}`} className={classes.Lider_card} >

                                            <div key={`lider-div1-${index}`} className={classes.Lider_pic}>
                                                {/* {console.log(this.info)} */}
                                                {/* <img src={item.pic} /> */}
                                                {item.akciya && <div key={`lider-div2-${index}`} className={classes.Akciya_container}>

                                                    <span key={`lider-span-${index}`} className={classes.Akciya_span}>{`${item.akciya}`}</span>
                                                    <img key={`lider-img-${index}`} src={item.pic_akciya} className={classes.Pic_akcia} />
                                                </div>}
                                                <img  key={`lider-img2-${index}`}src={`/img_products/${item.brand}/${item.model}/1.png`} />
                                                <div key={`lider-div3-${index}`} className={classes.Back_pic}></div>
                                                {item.pic_brand !== false ?
                                                    <><div key={`lider-div4-${index}`} className={classes.Brand}>
                                                        <img key={`lider-img3-${index}`} src={item.pic_brand} />
                                                    </div></> : null}
                                            </div>

                                            <div key={`lider-div5-${index}`} className={classes.Lider_text}>
                                                <h1 key={`lider-h1-${index}`} className={classes.Model} style={{ fontSize: item.small_item }}> {item.model}</h1>
                                                <p> {item.type[0]}</p>
                                                <p> {item.info.text}</p>
                                                <p> {item.info.text1[0]}  {item.info.text1[1]}</p>

                                                {item.inStock_outStock === 1 &&
                                                    <p className={classes.Stock_true}><span className={classes.Stock_span_true}>в наличии</span></p>
                                                }
                                                {!item.inStock_outStock &&
                                                    <p className={classes.Stock_false}><span className={classes.Stock_span_false}>под заказ</span></p>
                                                }
                                                {item.inStock_outStock === 2 &&
                                                    <p className={classes.Stock_soon}><span className={classes.Stock_span_soon}>ожидается поступление</span></p>
                                                }
                                                <h1 className={classes.Coast}>
                                                    {item.old_coast !== false ?
                                                        <><span className={classes.Old_coast} >{`${item.old_coast} руб.`}</span><span className={classes.New_coast}>{`${item.coast} руб.`}</span></> :
                                                        `${item.coast} руб.`}
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