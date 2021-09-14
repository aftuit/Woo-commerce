import { SearchRounded } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navigation-bar d-flex">
            <Link to="/">
                <img src="/assets/icons/LOGO.svg" className="navbar-brand" alt="" />
            </Link>

            <ul className="nav">
                <li className="nav-item"><Link to="/" className="nav-link">Sell</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">Marketplace</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">Community</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">Develop</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link">Resources</Link></li>
            </ul>

            <div className="d-flex ml-auto align-items-center">
                <span>Log in</span>

                <button type="button" className="btn btn-inc">Get Started</button>

                <SearchRounded className="search-icon"/>
            </div>
        </nav>
    );
};

export default Navbar;