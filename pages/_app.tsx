import '../styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import type {AppProps} from 'next/app';
import {ToastContainer} from 'react-toastify';
import React from 'react';

const MyApp = ({Component, pageProps}: AppProps): unknown => (
    <>
        <>
            <Component {...pageProps} />
            <ToastContainer/>
        </>
    </>
);

export default MyApp;
