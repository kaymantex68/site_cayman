import React from 'react';
import classes from './Slider.module.css';
import i1 from '../PicSlider/1.png';
import i2 from '../PicSlider/2.png';
import ImgComp from '../components/ImgComp';
function Slider(){
    let slideArr=[
    <ImgComp src={i1} text="IP Камера уличная"/>,
    <ImgComp src={i2} text="IP Камера купольная с микрофоном"/>
    ];
    const[x,setX]=React.useState(0)
    const goLeft=()=>{
        (x=== 0)? setX(-100*(slideArr.length-1)) : setX(x+100);
    };
    const goRight=()=>{
        (x=== -100*(slideArr.length-1))? setX(0) : setX(x-100);
    };
    return(
        <div className={classes.Slider}>
            {slideArr.map((item,index)=>{
                return (
                <div key={index} className={classes.Slide} style={{transform:`translateX(${x}%)`}}>
                    {item}
                </div>
                );
            })}
            <button className={classes.goLeft} onClick={goLeft} >
            <i class="fas fa-chevron-left"></i>
            </button>
            <button className={classes.goRight} onClick={goRight} >
            <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}


export default Slider; 