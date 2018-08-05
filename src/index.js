import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './config/registerServiceWorker.js';
import store from './redux/store/index.js';

const render = () => {
  return ReactDOM.render(<App/>, document.getElementById('root'));
}

store.subscribe(render);
render();
registerServiceWorker();
