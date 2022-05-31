import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
           <p>
               © 2022 Copyright <a href='https://github.com/Solio69'>Anastasiya Kazanina</a>
            </p>
        </div>
    );
};

export default Footer;
