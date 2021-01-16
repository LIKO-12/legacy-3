import React from 'react';
import Link from 'next/link';

import Logo from './logo';

import styles from './navbar.module.scss';

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
                {this.props.links && this.props.links.map(link => {
                    if (link.disabled) {
                        return <button className={styles.link} disabled>{link.name}</button>;
                    } else {
                        return (<Link href={link.href}>
                            <a className={styles.link + (link.active ? (" " + styles.active) : "")}>{link.name}</a>
                        </Link>);
                    }
                }) || null}

                {/* Spacer */}
                <div className={styles.spacer} />

                {/* Search Box */}
                <input type="text" className={styles.search_box} placeholder="Search documentation" autoComplete="true"/>
            </nav>
        );
    }
}