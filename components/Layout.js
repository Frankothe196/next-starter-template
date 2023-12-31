import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
                {children}
            <Footer/>
        </div>
    );
}

export default Layout;
