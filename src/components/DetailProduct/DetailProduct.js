import React, { useState, useContext } from 'react';
import classes from './DetailProduct.module.css'
import { Context } from '../../Context'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import youtubePic from './youtube.svg';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper components

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);


function DetailProduct({ match }) {

    const [open, setOpen] = useState(false);


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

    const slides = [];
    for (let i = 1; i < 5; i += 1) {

        if (true) {
            slides.push(
                <SwiperSlide key={`slide-${i}`}>
                    <div className={classes.Container_pic}>
                        <img
                            src={`/img_products/${DetailInfo.brand}/${DetailInfo.model}/${i}.png`}
                        />
                    </div>
                </SwiperSlide>
            );
        }
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
                                    <Link to="#"><span className={classes.FastDirect}>{match.params[item]}</span></Link>

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
                <div className={classes.Romb3}></div>
                <div className={classes.Block}>
                    <div className={classes.Picture}>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            // onSwiper={(swiper) => console.log(swiper)}
                            // onSlideChange={() => console.log('slide change')}
                            loop={true}
                            className={classes.Swiper_cont}
                        >
                            {slides}
                        </Swiper>
                    </div>
                    <div className={classes.Description}>
                        <img className={classes.PicBrand} src={DetailInfo.pic_brand} />
                        <div className={classes.UpInfo}>
                            <p className={classes.infoModel}>{DetailInfo.model}</p>
                            <p className={classes.coastModel}>

                                {DetailInfo.old_coast != false ?
                                    <><span className={classes.Old_coast} >{`${DetailInfo.old_coast}₽`}</span><span className={classes.New_coast}>   {`${DetailInfo.coast}₽`}</span></> :
                                    `${DetailInfo.coast}₽`}
                            </p>
                        </div>
                        <p className={classes.infoDescription}>{DetailInfo.description}</p>



                        <div className={classes.YoutubeLinks}>
                            {DetailInfo.youtube_instruction != undefined ?
                                <>
                                    <a href={DetailInfo.youtube_instruction}>
                                        <div className={classes.YoutubeContainer}>
                                            <div className={classes.YoutubeButton}>
                                                <span className={classes.YoutubeText}>Инструкция</span>
                                                <img className={classes.youtubeIMG} src={youtubePic}></img>
                                            </div>
                                        </div>
                                    </a>
                                </> :
                                <></>}

                            {DetailInfo.youtube != undefined ?
                                <>
                                    <a href={DetailInfo.youtube}>
                                        <div className={classes.YoutubeContainer}>
                                            <div className={classes.YoutubeButton}>
                                                <span className={classes.YoutubeText}>Видео</span>
                                                <img className={classes.youtubeIMG} src={youtubePic}></img>
                                            </div>
                                        </div>
                                    </a>
                                </> :
                                <></>}
                        </div>


                        <div className={classes.menu_description}>
                            <div className={classes.Button_description} onClick={() => { setOpen(false) }}>Характеристики</div>
                            {DetailInfo.download && <div className={classes.Button_download} onClick={() => { setOpen(true) }}>Загрузка</div>}

                        </div>




                        <div className={classes.info_download}>
                            <div className={open ? classes.Download_on : classes.Download}>
                                <div className={classes.download_links}>
                                    {
                                    DetailInfo.download &&
                                        Object.keys(DetailInfo.download).map((item, index) => {
                                            return (
                                                <a href={DetailInfo.download[item][1]}><p className={classes.Link_text}>{DetailInfo.download[item][0]}</p></a>
                                            )
                                        })
                                    }
                                    



                                </div>
                            </div>

                            {/* <div className={classes.Info_on}> */}

                            {Object.keys(DetailInfo.info).map((item, index) => {
                                return (
                                    <div className={classes.Stringe}>
                                        <div className={classes.Id}>
                                            <span className={classes.infoBold}>{DetailInfo.info[item][0]}</span>
                                        </div>
                                        <div className={classes.Text}>
                                            <span className={classes.info}>{DetailInfo.info[item][1]}</span>
                                        </div>
                                    </div>
                                )
                            })}
                            {/* </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default DetailProduct;