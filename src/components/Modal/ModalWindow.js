import React, { useContext } from 'react';
import classes from './ModalWindow.module.css'
import { Context } from '../../Context'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ModalWindow() {
    const { Modal, OpenModal, Data, IdModel, Model } = useContext(Context);
    // { console.log('модальное окно') }
    // { console.log(Model) }
    return (
        <>
            <div className={classes.Modal_back} onClick={OpenModal}></div>
            <div className={classes.Modal}>
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
                        <SwiperSlide>
                            <div className={classes.Container_pic}>
                                <img src={Model.pic} />
                            </div>
                        </SwiperSlide>
                    </Swiper>





                </div>
                <div className={classes.Description}>
                    <div className={classes.Model}>{Model.model}</div>
                    {Object.keys(Model.info).map((item, index) => {
                        return (
                            <div className={classes.Stroka} key={index}>
                                <div className={classes.tag}>{Model.info[item][0]}</div>
                                <div className={classes.Centre}>................................................................................................................</div>
                                <div className={classes.info}>{Model.info[item][1]}</div>
                            </div>
                        )
                    })}
                    <div className={classes.Pic} onClick={OpenModal}></div>
                    <div className={classes.exit} onClick={OpenModal}>закрыть</div>
                </div>
            </div>
        </>
    )
}
export default ModalWindow;