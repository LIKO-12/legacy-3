import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import configuration from '../docs/_navbar.json';
import Logo from './logo';

function NavbarLink({ configEntry: [ name, path ] }) {
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

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { active: false };

        this.handleMobileToggle = this.handleMobileToggle.bind(this);
    }

    handleMobileToggle() {
        this.setState(state => ({
            active: !state.active
        }));
    }

    render() {
        return (
            <nav className={styles.navbar + (this.state.active ? (" " + styles.active) : "")}>
                {/* LIKO-12's Logo */}
                <div className={styles.navbar_logo}>
                    <Link href="/">
                        <a><Logo /></a>
                    </Link>

                    <div className={styles.mobile_spacer} />
                    <button className={styles.mobile_toggle} onClick={this.handleMobileToggle} />
                </div>

                {/* Navigation Links */}
                {configuration.map(entry => <NavbarLink key={entry[0]} configEntry={entry} />)}

                {/* Spacer */}
                <div className={styles.spacer} />

                {/* Search Box */}
                <input type="text" className={styles.search_box} placeholder="Search documentation" autoComplete="true" />
            </nav>
        );
    }
}