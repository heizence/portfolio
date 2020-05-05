import React from 'react';
import { Link } from "react-scroll";
import './Navbar.css'

const Navbar = () => {
    const section = ['home', 'about', 'skills', 'project', 'contact']
    return (
        <div id="navbar">       
        <ul>
            {section.map((element, index) => {
                return (
                    <Link
                    key={index}
                    activeClass="active"
                    to={element}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    ><li>{element.toUpperCase()}</li>
                    </Link>
                )
            })}
        </ul>
    </div>
    )
}

export default Navbar
