import React from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>    
                
                <li>
                    <Link to="/about">About</Link>
                </li>
                    <Link to="/pricing">Pricing</Link>
                <li>

                </li>
            </ul>
        </nav>
    )
}


export default NavBar;