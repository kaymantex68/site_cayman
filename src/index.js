import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Context } from './Context';
import { Data } from './Data';
import { BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom'
ReactDOM.render(
<Context.Provider value={{

// Modal, 
// OpenModal, 
Data,
// IdModel, Model, 
// getNav, Nav 
}}>
<BrowserRouter>
<App />
</BrowserRouter>
</Context.Provider>
,document.getElementById('root'));
