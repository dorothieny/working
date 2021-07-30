import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.scss';
import {Provider} from 'react-redux';

import ErrorBoundry from './components/error-boundry';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';
import store from './store';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                
                    <App/>
              
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

