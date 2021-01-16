import Head from "next/head";
import NavBar from "./navbar";
import SidePanel from "./sidepanel";

import styles from "./document.module.scss";

export default function Document({ documentData={} }) {
    return (<div className={styles.root}>
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>

        <NavBar links={documentData.links} />

        <div className={styles.main_container}>
            <SidePanel />

            <article className={styles.content_container} dangerouslySetInnerHTML={{__html: documentData.contentHtml}}>

            </article>
        </div>
    </div>);
}