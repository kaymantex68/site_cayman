import React, { useState, useContext } from 'react';
import classes from './ModalWindow.module.css'
import { Context } from '../../Context'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);



function ModalWindow() {
    const { Modal, OpenModal, Data, IdModel, Model } = useContext(Context);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);
    // { console.log('модальное окно') }
    // { console.log(Model) }
    
    const slides = [];
    for (let i = 1; i < 5; i += 1) {
       
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <div className={classes.Container_pic}>
                    <img

                        src={`img_products/${Model.brand}/${Model.model}/${i}.png`}

                    />
                </div>
            </SwiperSlide>
        );
    }

    const thumbs = [];
    for (let i = 0; i < 5; i += 1) {
        thumbs.push(
            <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
                <img
                    src={Model.pic}
                    alt={`Thumbnail ${i}`}
                ></img>
            </SwiperSlide>
        );
    }
    return (
        <>
            <div className={classes.Modal_back} onClick={OpenModal}></div>
            <div className={classes.Modal}>
                <div className={classes.Exit_container}>
                    <div className={classes.Model}><p>{Model.model}</p></div>
                    <div className={classes.Brand_pic}>
                        <img src={Model.pic_brand} />
                    </div>
                    <div className={classes.Links}></div>
                    <div className={classes.exit} onClick={OpenModal}>закрыть</div>

                </div>
                <div className={classes.Modal_container}>
                    <div className={classes.Galery}>



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
                            {/* <SwiperSlide>
                                {({ isActive }) => 
                                (
                                 console.log('active')
                                )}
                                <div className={classes.Container_pic}>
                                    <img src={Model.pic} />
                                </div>
                            </SwiperSlide> */}
                        </Swiper>






                    </div>
                    <div className={classes.Description}>

                        <div className={classes.Type}>{Model.description}</div>
                        {Object.keys(Model.info).map((item, index) => {
                            return (
                                <div className={classes.Stroka} key={index}>
                                    <div className={classes.tag}>{Model.info[item][0]}</div>
                                    <div className={classes.Centre}></div>
                                    <div className={classes.info}>{Model.info[item][1]}</div>
                                </div>
                            )
                        })}
                        <div className={classes.Pic} onClick={OpenModal}></div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default ModalWindow;