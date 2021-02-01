import Head from 'next/head';
import NavBar from './navbar';
import SidePanel from './sidepanel';
import styles from './document.module.scss';

export default function Document({ children }) {
    return (
        <div className={styles.root}>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <div className={styles.main_container}>
                <SidePanel />
                <div className={styles.content_container}>{children}</div>
            </div>
        </div>
    );
}