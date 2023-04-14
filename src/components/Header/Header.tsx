import React from 'react'
import { Toggle } from '../ToggleDark/Toggle';

function Header() {
    return (
        <header>
            <div className="header-logo">
                <h1>@kevinllo</h1>
            </div>
            <div>
                <Toggle />
            </div>
        </header>
    );
}

export default Header;