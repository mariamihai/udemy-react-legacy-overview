import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import AppWithHooks from './AppWithHooks';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle="Person Manager" />, document.getElementById('root'));
// ReactDOM.render(<AppWithHooks />, document.getElementById('root'));

registerServiceWorker();