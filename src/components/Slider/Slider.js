import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Slider.module.css';
import ImgComp from './ImgComp';
import { SidebarData } from './SliderData'
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

function Slider() {


    const slides = [];


    {
        SidebarData.map((item, index) => {
            slides.push(

                <SwiperSlide key={`slide-${index}`}>

                    {item.link_a &&
                        <a key={`link-nav-${index}`} href={item.link_a}>
                            <ImgComp  key={index} obj={item} />
                        </a>
                    }
                    {item.link_b &&
                        <Link to={item.link_b}>
                            <ImgComp  key={index} obj={item} />
                        </Link>
                    }
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
                    disableOnInteraction: false,
                }}

                className={classes.Swiper_cont}
            >
                {slides}
            </Swiper>
        </div>
    )
}


export default Slider; 