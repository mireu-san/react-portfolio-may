import React from "react";
import "../Navbar/Navbar.css";

export default () => (
    <navbar className="navigator">
        <ul>
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
