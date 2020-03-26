import React from 'react'
import '../styles/navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: true
        }
    }

    render = () => (
        <nav className="navbar">
            <div className="navbar__left">
                <span className="navbar__title">Dojos</span>
            </div>
            <div className="navbar__right">
                <ul className="navbar__items">
                    <li is-active={this.state.isActive.toString()} className="active navbar__item navbar__item_1">FizzBuzz</li>
                    <li is-active={this.state.isActive.toString()} className="navbar__item navbar__item_2">Marvel</li>
                </ul>
            </div>
        </nav>
    )  
}


export default Navbar;