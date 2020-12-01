import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import classes from './App.module.css';
import Slider from './components/Slider/Slider';
import UpHeader from './components/UpHeader';
import Navbar from './components/Navbar/Navbar';
import LiderOfSale from './components/FastLink/LiderOfSale'
import ModalWindow from './components/Modal/ModalWindow'
import { Context } from './Context'
import { Data } from './Data'
import Main from './components/Main'
import Catalog from './components/Catalog'


function App() {

  const [Modal, setModal] = useState(false);
  const [Model, setModel] = useState('');
  const OpenModal = () => {
    setModal(!Modal);
  }
  const IdModel = (e) => {
    setModel(e);
    OpenModal();
  }

  return (

    <Context.Provider value={{ Modal, OpenModal, Data, IdModel, Model }}>
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
            <Route exact path="/" component={Main}/>
            <Route path="/catalog" component={Catalog}/>
          </Switch>
          </div>
        </div>
      </Router>
    </Context.Provider>

  );
};
export default App;
