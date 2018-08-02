import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './config/registerServiceWorker';
import store from './redux/store';

const render = () => {
  return ReactDOM.render(<App/>, document.getElementById('root'));
}

store.subscribe(render);
render();
registerServiceWorker();
