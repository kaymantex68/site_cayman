import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';


  ReactGA.initialize('G-QYDKQ70GM0');
 
    ReactGA.pageview('/');
 

ReactDOM.render(<App />,document.getElementById('root'));
