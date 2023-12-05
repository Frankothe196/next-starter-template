import React from 'react';
import styles from '../styles/Header.module.scss';

const Header = () => {
    return (
        <nav className={styles.header}>
             <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
            </a>
        </nav>
    );
}

export default Header;
