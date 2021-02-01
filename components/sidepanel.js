import styles from './sidepanel.module.scss';
import { useRouter } from 'next/router';

export default function SidePanel() {
    const router = useRouter();

    return (
        <nav className={styles.side_panel}>
            <ul>
                <li><b>Current route: {' '}</b> <code>{router.pathname}</code></li><br />
                <li><b>Router query: {' '}</b> <code>{toString(router.query)}</code></li><br />
                <li><b>As path: {' '}</b> <code>{router.asPath}</code></li><br />
            </ul>


        </nav>
    );
}