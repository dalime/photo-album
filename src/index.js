import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import NavBar from './components/NavBar';

//import './css/style.css';

render((
  <div>
    <NavBar />
    <App />
  </div>
), document.getElementById('root')
);
