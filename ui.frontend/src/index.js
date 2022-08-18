import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import 'custom-event-polyfill';

import { Constants, ModelManager } from '@adobe/aem-spa-page-model-manager';
import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import App from './App';
import LocalDevModelClient from './LocalDevModelClient';
import ErrorPage404 from "../src/components/ErrorPage/";
import './components/import-components';
import './index.css';

const modelManagerOptions = {};
if(process.env.REACT_APP_PROXY_ENABLED) {
    modelManagerOptions.modelClient = new LocalDevModelClient(process.env.REACT_APP_API_HOST);
}

const renderApp = () => {
    ModelManager.initialize(modelManagerOptions).then(pageModel => {
        const history = createBrowserHistory();
        render(
            <Router navigate={history}>
                <Route path="/" element={<App
                    history={history}
                    cqChildren={pageModel[Constants.CHILDREN_PROP]}
                    cqItems={pageModel[Constants.ITEMS_PROP]}
                    cqItemsOrder={pageModel[Constants.ITEMS_ORDER_PROP]}
                    cqPath={pageModel[Constants.PATH_PROP]}
                    locationPathname={window.location.pathname}
                />} />
                <Route path="*" element={<ErrorPage404 />} />       
            </Router>,
            document.getElementById('spa-root')
        );
    });
};



document.addEventListener('DOMContentLoaded', () => {

    renderApp();
});
