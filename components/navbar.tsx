import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Logo from './logo';
import styles from './navbar.module.scss';
import configurationJson from '../docs/_navbar.json';

type NavbarConfigEntry = [name: string, path: string | null];
const configuration = configurationJson as NavbarConfigEntry[];

function NavbarLink({ configEntry: [name, path] }: { configEntry: NavbarConfigEntry }) {
    if (!path) return <button className={styles.link} disabled> {name} </button>;
    const router = useRouter();

    const isActive = router.asPath.startsWith(path);
    const activeClass = isActive ? (' ' + styles.active) : '';

    return (
        <Link href={path}>
            <a className={styles.link + activeClass}> {name} </a>
        </Link>
    );
}

export default function NavBar() {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(!active);

    return (
        <nav className={styles.navbar + (active ? (" " + styles.active) : "")}>
            {/* LIKO-12's Logo */}
            <div className={styles.navbar_logo}>
                <Link href="/">
                    <a><Logo /></a>
                </Link>

                <div className={styles.mobile_spacer} />
                <button className={styles.mobile_toggle} onClick={toggleActive} />
            </div>

            {/* Navigation Links */}
            {configuration.map((entry: NavbarConfigEntry) => <NavbarLink key={entry[0]} configEntry={entry} />)}

            {/* Spacer */}
            <div className={styles.spacer} />

            {/* Search Box */}
            <input type="text" className={styles.search_box} placeholder="Search documentation" autoComplete="true" />
        </nav>
    );
}