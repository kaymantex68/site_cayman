import React from 'react';
import classes from './App.module.css';
import Slider from './components/Slider/Slider';
import UpHeader from './components/UpHeader';
import Navbar from './components/Navbar/Navbar';
import FastLink from './components/FastLink/FastLink'
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
          <FastLink />
        </div>
      </div>


    </>
  );
};
export default App;
