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
    // let slideArr=[];
    // {SidebarData.map((item,index)=>{
    //     return (
    //         slideArr.push(<ImgComp key={index} obj={item}/>)
    //     )
    // })}

    // const[x,setX]=React.useState(0)
    // const goLeft=()=>{
    //     (x=== 0)? setX(-100*(slideArr.length-1)) : setX(x+100);
    // };
    // const goRight=()=>{
    //     (x=== -100*(slideArr.length-1))? setX(0) : setX(x-100);
    // };

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
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
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