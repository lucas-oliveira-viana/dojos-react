import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <span className="navbar__title">Dojos</span>
            </div>
            <div className="navbar__right">
                <ul className="navbar__items">
                    <li className="navbar__item navbar__item_1">FizzBuzz</li>
                    <li className="navbar__item navbar__item_2">Palindromo</li>
                    <li className="navbar__item navbar__item_3">Animações</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;