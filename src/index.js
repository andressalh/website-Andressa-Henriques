
import React, {Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';

ReactDOM.render(
    <Suspense fallback={(<div>Loading ~~~</div>)}>
        <App />
    </Suspense>,
    document.getElementById('root'));

serviceWorker.unregister();
