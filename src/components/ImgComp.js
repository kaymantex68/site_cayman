import React from 'react';
 function ImgComp({src}){
     let imgStyles={
         width: "auto",
         height: 100+"%",
         left: 50+"%",
         position: "absolute",
         transform: "translateX(-50%)"
     }
    return <img src={src} alt="slide-img" style={imgStyles}></img>
 }
 export default ImgComp;