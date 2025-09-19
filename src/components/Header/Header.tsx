import React from 'react';
import { Link } from 'lucide-react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-icon">
                <Link size={48} />
            </div>
            <h1 className="header-title">URL Shortener</h1>
            <p className="header-subtitle">Shorten your long URLs with ease</p>
        </div>
    );
};

export default Header;