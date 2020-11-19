import React from 'react';
import classes from './App.module.css';
import Slider from './components/Slider';
import UpHeader from './components/UpHeader';
import UpMenu from './components/UpMenu';
function App() {
  return (
    <>
      <div className={classes.top_header}>
        <UpHeader/>
      </div>
      <div className={classes.top_menu}>
        <UpMenu/>
      </div>
      <div className={classes.slider}>
        <Slider />
      </div>
      

    </>
  );
};
export default App;
