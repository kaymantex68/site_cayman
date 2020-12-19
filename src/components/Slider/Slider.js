import React from 'react';
import classes from './Slider.module.css';
import ImgComp from './ImgComp';
import { SidebarData } from './SliderData'
import { Context } from '../../Context'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);

function Slider() {
 

    const slides = [];


    {
        SidebarData.map((item, index) => {
            slides.push(
                <SwiperSlide key={`slide-${index}`}>
                    <ImgComp key={index} obj={item}/>
                </SwiperSlide>
            );
        })
        }


    return (
        <div className={classes.Main}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
             
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: true,
                }}
               
                className={classes.Swiper_cont}
            >
                {slides}
            </Swiper>
        </div>
    )
}


export default Slider; 