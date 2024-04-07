import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../../assets/WhiteLogo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import MobileMenu from './MobileMenu.js';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-purple-700">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
            <div className="flex items-center justify-between p-4 md:p-0">
                <div className="flex-shrink-0">
                    <img src={logo} alt="whiteLogo" className="h-8 md:h-auto"/>
                </div>
                <div className="md:hidden">
                    <button id="mobile-menu-btn" onClick={toggleMobileMenu} className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                        <RxHamburgerMenu className="h-6 w-6 fill-current text-white"/>
                    </button>
                </div>
            </div>
            <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
        </div>
    </div>
    );
}

export default NavBar;