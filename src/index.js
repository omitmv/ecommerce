import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Ecommerce from './main/Ecommerce'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <>
        <Ecommerce />
    </>,
    document.getElementById('root')
);

serviceWorker.unregister();