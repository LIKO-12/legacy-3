import { useRouter } from 'next/router';
import styles from './logo.module.scss';

/**
 * The LIKO-12's logo as visible in the navbar (the icon and the title next to it).
 */
const Logo: React.FC = () => {
    const router = useRouter();

    return (<>
        <img src={router.basePath + '/assets/img/logo-icon.svg'} className={styles.logo_icon} />
        <img src={router.basePath + '/assets/img/logo-title.svg'} className={styles.logo_title} />
    </>);
}

export default Logo;