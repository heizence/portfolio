import React from 'react';
import { Link } from "react-scroll";
import './Navbar.css'

const Navbar = () => {
    const section = ['home', 'portfolio']
    return (
        <div id="navbar">       
        <ul id="list">
            {section.map((element, index) => {
                return (
                    <Link
                    key={index}
                    activeClass="active"
                    to={element}
                    spy={true}
                    smooth={true}
                    offset={-65}
                    duration= {500}
                    ><li className="items">{element.toUpperCase()}</li>
                    </Link>
                )
            })}
        </ul>
    </div>
    )
}

export default Navbar
