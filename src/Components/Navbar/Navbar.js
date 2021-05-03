import React from "react";
import styles from "../Navbar/Navbar.module.css";

export default () => (
    <navbar>
        <ul className={styles.navigator}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/skills">Skills</a>
            </li>
            <li>
                <a href="/portfolio">Portfolio</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </navbar>
);
