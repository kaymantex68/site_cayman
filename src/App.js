import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import Slider from './components/Slider/Slider';
import UpHeader from './components/UpHeader';
import Navbar from './components/Navbar/Navbar';
import LiderOfSale from './components/FastLink/LiderOfSale'
import ModalWindow from './components/Modal/ModalWindow'
import { Context } from './Context'
import { Data } from './Data'


function App() {



  const [Modal, setModal] = useState(false);
  const [Model, setModel] = useState('');
  const OpenModal = () => {
    setModal(!Modal);
  }
  const IdModel = (e) => {

    setModel(e);
    console.log('из childe')
    console.log(e);

    console.log('просто model')
    console.log(Model);
    OpenModal();
  }

  // useEffect(() => {
  //   //  <App />,
    
  //   console.log('из useEffect ')
  //   console.log(Model)
  // }, [Model]);

  return (
    <Context.Provider value={{ Modal, OpenModal, Data, IdModel, Model }}>
      <div className={classes.Main}>


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
          <div className={classes.Lider_of_sale}>
            <div className={classes.Lider_main}>
              <div className={classes.Lider_text}>Лидеры продаж</div>
            </div>
            <LiderOfSale />
          </div>
          <div className={classes.Rasprodaga}>
            <div className={classes.Lider_main}>
              <div className={classes.Lider_text}>Распродажа</div>
            </div>
            <LiderOfSale />
          </div>
        </div>
       

      </div>
      {Modal && <ModalWindow />}
    </Context.Provider>
  );
};
export default App;
