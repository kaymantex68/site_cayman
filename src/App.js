import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import classes from './App.module.css';
import UpHeader from './components/UpHeader';
import Navbar from './components/Navbar/Navbar';
import { Context } from './Context'
import { Data } from './Data'
import Main from './components/Main'
import Catalog from './components/Catalog/Catalog'



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
  const [Nav,setNav]=useState(null);
  const getNav=(e)=>{
    setNav(e);
  }
  console.log(Nav);
  return (
    

    <Context.Provider value={{ Modal, OpenModal, Data, IdModel, Model, getNav, Nav }}>
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
            <Route exact path="/catalog" component={Catalog}/>
            <Route exact path="/catalog/:cat" component={Catalog}/>
            <Route exact path="/catalog/:cat/:type" component={Catalog}/>
            <Route  path="/catalog/:cat/:type/:brand" component={Catalog}/>
          </Switch>
          </div>
        </div>
      </Router>
    </Context.Provider>

  );
};
export default App;
