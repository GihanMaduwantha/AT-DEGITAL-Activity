import React from 'react';

function MobileMenu({ isOpen, toggleMenu }) {
    return (
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} flex-col md:flex-row md:items-center md:space-x-4 text-white`}>
            <div className="navbar__item">HOME</div>
            <div className="navbar__item">SERVICES</div>
            <div className="navbar__item">ABOUT US</div>
            <div className="navbar__item">CONTACT US</div>
            <div className="navbar__item">CAREERS</div>
        </div>
    );
}

export default MobileMenu;