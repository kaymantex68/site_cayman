import { Switch, Route } from 'react-router-dom'
import classes from './App.module.css';
//-----------------------------------------------------------------------------------------
import React from 'react';

import UpHeader from './UpHeader/UpHeader';

import Liders from '../containers/Liders'
import Sales from '../containers/Sales'
import Slider from '../containers/Slider/Slider'
import Diller from '../containers/Diller'
import Navbar from '../containers/Navbar'
import Footer from '../components/Footer/Footer'

import { Data } from '../Data/ProductsData/Data'
import { SliderData } from '../Data/SliderData/SliderData'
import { DillerData } from '../Data/DillerData/DataDiler'


/**
 *  Компонент App получает props из App.js при помощи 
 *  connect
 */
function App(props) {
  const { products } = props;
  console.info('PROPS APPS: ', props)
  console.info('DILLER APPS: ', DillerData)
  /**
   *  При первом запуске сайта весь массив product товаров
   *  передается с помощью функции setProduct (которая описана
   *  в actions/products.js ) передается в Store. Reducer products.
   *  так же сразу делается выборка для лидеров продаж и для распродажи.
   */
  React.useState(() => {
    const { setProducts, setLiders, setSales, setSlides, setDillers } = props;
    setProducts(Data)
    setLiders(Data)
    setSales(Data)
    setSlides(SliderData)
    setDillers(DillerData)
  })

  return (

    <>
      <div className={classes.Main}>
        <UpHeader />
        <Navbar />
        <Slider/>
        <dir className={classes.gap}></dir>
        <Liders />
        <Sales />
        <Diller />
        <Footer/>
        {/* <div className={classes.Header}>
          
        </div>
        <div className={classes.Navbar}>
          <Navbar />
        </div>
        <div className={classes.Content_Rout}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/contacts/adress" component={Contacts} />
            <Route exact path="/:model" component={DetailProduct} />
            <Route exact path="/catalog/all" component={Catalog} />
            <Route exact path="/catalog/all/:model" component={DetailProduct} />
            <Route exact path="/catalog/:cat" component={Catalog} />
            <Route exact path="/catalog/:cat/:type" component={Catalog} />
            <Route exact path="/catalog/:cat/:type/:brand" component={Catalog} />
            <Route exact path="/catalog/:cat/:type/:brand/:model" component={DetailProduct} />
                </Switch>
        </div>
        <Footer /> */}
      </div>
    </>
  );
};
export default App;
