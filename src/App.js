import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom'
import classes from './App.module.css';
import UpHeader from './components/UpHeader';
import Navbar from './components/Navbar/Navbar';
import { Context } from './Context';
import { Data } from './Data';
import Main from './components/Main';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer';
import DetailProduct from './components/DetailProduct/DetailProduct';
import Contacts from './components/Contacts/Contacts';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Helmet } from 'react-helmet'





function App() {

  const { Data } = useContext(Context);
  let DataCatalog = [];

  Data.map((item) => {
    return (
      DataCatalog.push(item)
    )
  })


  var location = useLocation();
  // console.log('pathname---------------APP');
  // console.log(location.pathname);

  ReactGA.initialize('UA-185966908-1');
  useEffect(() => {
    // ReactGA.ga('send', 'pageview', '/');
    // ReactGA.pageview('/');
    // ReactGA.pageview('/catalog');
    // ReactGA.pageview('/contacts/adress');
    // ReactGA.pageview('/catalog/all');
    // ReactGA.pageview('/:model');
    ReactGA.pageview(location.pathname);
  }, [location]);



  return (


    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="referrer" content="origin"/>
        <meta name="yandex-verification" content="af6bf6599fd7f67e" />
        <meta name="google-site-verification" content="ZREAVCIqBSZg9W4q6hxEtVqggkIYbDP1o5fAWHsNmN0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="Продажа и монтаж систем видеонаблюдения. Пожарная и охранная сигнализация. ОПС. СКУД. Монтаж домофонов. Монтаж контроля доступа. Тамбов, тамбовская область.Моршанск, Кирсанов, Жердевка, Рассказово, Уварово, Умет, Мордово. В Тамбове."/>
        <meta name="rights" content="Кайман 2020"/>
        <meta name="description" content="Продажа и монтаж систем видеонаблюдения. Пожарная и охранная сигнализация. ОПС. СКУД. Монтаж домофонов. Монтаж контроля доступа. Тамбов, тамбовская область.Моршанск, Кирсанов, Жердевка, Рассказово, Уварово, Умет, Мордово. В Тамбове."/>
        {DataCatalog.map((item, index) => {
          return(
          <meta
            name="description"
            content={`${item.brand} ${item.model}`}
          />)
        })}
        
        <script src="https://kit.fontawesome.com/d8de2d9986.js"></script>
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />


        <title>Кайман. Системы безопасности.</title>
      </Helmet>

      <div className={classes.Main}>
        <div className={classes.Header}>
          <UpHeader />
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
            {/* <Route path="*" component={Main} /> */}
          </Switch>
        </div>
        <Footer />
      </div>
      {/* <div className={classes.FooterContainer}> */}

      {/* </div> */}



    </>

  );
};
export default App;
