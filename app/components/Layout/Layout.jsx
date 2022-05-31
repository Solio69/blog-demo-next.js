import React from 'react';
import Header from '../header';
import Footer from '../footer/Footer';
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header/>
                <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;