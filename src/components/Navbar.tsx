import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">HelpDesk ©</Link>
            </nav>
        </>
    )
}