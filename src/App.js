import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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


function App() {
  ReactGA.initialize('UA-185966908-1');
  
  useEffect(() => {
    // ReactGA.ga('send', 'pageview', '/');
    ReactGA.pageview('/');
    ReactGA.pageview('/catalog');
    ReactGA.pageview('/contacts/adress');
    ReactGA.pageview('/catalog/all');
    ReactGA.pageview('/:model');
  },[]);


  return (

    
    <Context.Provider value={{
      // Modal, 
      // OpenModal, 
      Data,
      // IdModel, Model, 
      // getNav, Nav 
    }}>
      <Router>
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
      </Router>
    </Context.Provider>
   

  );
};
export default App;
