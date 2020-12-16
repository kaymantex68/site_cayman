import React, { useState, useEffect } from 'react';
import { Switch, Router } from 'react-router-dom'
import classes from '../App.module.css';
import Slider from '../components/Slider/Slider';
import UpHeader from '../components/UpHeader';
import Navbar from '../components/Navbar/Navbar';
import LiderOfSale from '../components/FastLink/LiderOfSale'
import ModalWindow from '../components/Modal/ModalWindow'
import { Context } from '../Context'
import { Data } from '../Data'


function Main() {

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



    return (
        <Context.Provider value={{ Modal, OpenModal, Data, IdModel, Model }}>
          
            <div className={classes.Content}>
                <div className={classes.slider}>
                    <Slider />
                </div>
                <div className={classes.FastLink}>
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
                { Modal && <ModalWindow />}
            </div>
       
            
        </Context.Provider >
    );
};
export default Main;
