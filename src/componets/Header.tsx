import React from "react";
import { Link } from 'react-router-dom';

import '../componets/styles/style.css'

const Header = () => {
    return (
        <header className="header">
            Marvel Challenge
            <nav>
                <ul>
                    <li>
                        <Link className="link" to="/characters">
                            Characters
                        </Link></li>
                    <li>
                        <Link className="link" to="/comics">
                            Comics
                        </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;