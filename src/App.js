import React from 'react';
import classes from './App.module.css';
import Slider from './components/Slider/Slider';
import UpHeader from './components/UpHeader';
import Navbar from './components/Navbar/Navbar';
import LiderOfSale from './components/FastLink/LiderOfSale'
function App() {
  return (
    <>
      <div className={classes.Header}>
        <UpHeader />
      </div>
      <div className={classes.Navbar}>
        <Navbar />
      </div>
      <div className={classes.Content}>
        <div className={classes.slider}>
          <Slider />
        </div>
        <div className={classes.Fast_link}>
        <div className={classes.Lider_main}>
          <div className={classes.Lider_text}>Лидеры продаж</div>
          </div>
          <LiderOfSale />
          
        </div>
        <div className={classes.Fast_link}>
        <div className={classes.Lider_main}>
          <div className={classes.Lider_text}>Распродажа</div>
          </div>
          <LiderOfSale />
          
        </div>
        
      </div>


    </>
  );
};
export default App;
