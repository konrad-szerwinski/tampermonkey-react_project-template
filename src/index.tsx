import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
import { MainContextProvider } from './context/MainContext';

//Modify for your purposes
const appContainer = document.querySelector('#header'); 

const root = createRoot(appContainer);
    
root.render(
    <React.StrictMode>
        <MainContextProvider>
            <App />
        </MainContextProvider>
    </React.StrictMode>
);

//This is here because when you pack everything as browser extension, it won't work
//because of missing functions (because not needed)
if (typeof GM_getResourceText == 'function') {
        const resource = GM_getResourceText('IMPORTED_CSS');
        GM_addStyle(resource);
    
        /**
         * In tampermonkey
         * // @require    file://<path-to-file>
         * // @resource   IMPORTED_CSS <path-to-file>
         * // @grant      GM_getResourceText
         * // @grant      GM_addStyle
         * 
         * and remove 
         * // @grant      none
         */
    }