import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history';
import { cssSpiderRootName } from './css-spider/src/constants';

const removeContent = () => {
  const rootElement = document.getElementById(cssSpiderRootName);
  rootElement && ReactDOM.unmountComponentAtNode(rootElement);
  rootElement && rootElement.remove();
};

removeContent();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
