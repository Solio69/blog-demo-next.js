import React, { Component } from 'react';
import HeaderLink from './headerLink/HeaderLink';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

const Header = () => {
    const router = useRouter()

    return (
        <header className={styles.header}>
            <div>
                Logo
            </div>
            <nav className={styles.header__nav}>
                <li className={router.pathname == "/" ? styles.active : null}>
                    <HeaderLink href='/' text='Blog'/>
                </li> 
                <li className={router.pathname == "/gallary" ? styles.active : null}>
                    <HeaderLink href='/gallary' text='Photo gallery'/>
                </li>
                <li className={router.pathname == "/donate" ? styles.active : null}>
                    <HeaderLink href='/donate' text='Donate info'/>
                </li>
            </nav>
        </header>
    );
}

export default Header;
