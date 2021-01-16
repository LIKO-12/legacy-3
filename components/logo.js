import styles from "./logo.module.scss";
import { getBasePath } from "../lib/utils";

/**
 * The LIKO-12's logo as visible in the navbar (the icon and the title next to it).
 */
export default function Logo() {
    return (<>
        <img src={getBasePath() + "/assets/img/logo-icon.svg"} className={styles.logo_icon} />
        <img src={getBasePath() + "/assets/img/logo-title.svg"} className={styles.logo_title} />
    </>);
}