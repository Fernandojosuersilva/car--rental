import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import { FaCar, FaBars, FaWindowClose } from "react-icons/fa";

export default function Navbar(){
    const [showMenu, setShowMenu] = useState(false);
    

    function toggleMenu(){
        setShowMenu(!showMenu)
    }

    function closeMenu(){
        setShowMenu(false)
    }

    useEffect(() => {
        if (showMenu) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
    
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [showMenu]);
    

    return(
        <nav className="nav--container">
            <h1 className="nav--brand"><FaCar className="icon--faCar" /> Car <br/><span className="nav--brand--word">Rental</span></h1>
            <ul className={showMenu ? "menu--mobile" : "menu--list"}>
                <li className={showMenu ? "navbar--item--mobile" : "list--item"}>
                    {showMenu ? (
                        <Link
                        to="/"
                        className="navbar--link--mobile"
                        onClick={closeMenu}
                        >
                        Home
                        </Link>
                        ) : (
                        <Link to="/" className="navbar--link">
                        Home
                        </Link>
                    )}</li>
                <li className={showMenu ? "navbar--item--mobile" : "list--item"}>
                    {showMenu ? (
                        <Link
                        to="/about"
                        className="navbar--link--mobile"
                        onClick={closeMenu}
                        >
                            
                            About
                        </Link>
                    ) : (
                        <Link to="/about" className="navbar--link">
                            About
                        </Link>
                    )}</li>
                <li className={showMenu ? "navbar--item--mobile" : "list--item"}>
                    {showMenu ? (
                        <Link to="/models"
                        className='navbar--link--mobile'
                        onClick={closeMenu}
                        >
                            Vehicle Models
                        </Link>
                    ) : (
                        <Link to="/models"
                        className="navbar--link"
                        >
                            Vehicle Models
                        </Link>
                    )}</li>
                <li className={showMenu ? "navbar--item--mobile" : "list--item"}>
                    {showMenu ? (
                        <Link
                        to='/reviews'
                        className="navbar--link--mobile"
                        onClick={closeMenu}
                        >
                            Reviews
                        </Link>
                    ) : (
                        <Link to='/reviews' className='navbar--link'>
                            Reviews
                        </Link>
                    )}</li>
                <li className={showMenu ? "navbar--item--mobile" : "list--item"}>
                    {showMenu ? (
                        <Link
                        to='/contact'
                        className='navbar--link--mobile'
                        onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    ) : (
                        <Link to='/contact' className="navbar--link">
                            Contact
                        </Link>
                    )}</li>
            </ul>
            <div className="nav--btns--main">
                <button className="nav--sign--btn">Sign in</button>
                <button className="nav--register--btn">Register</button>
            </div>
            {showMenu ? (<FaWindowClose 
                className="icon--menu--close--active"
                onClick={toggleMenu}
            />) : 
            (<FaBars 
                className="icon--menu"
                onClick={toggleMenu}
            />)}
        </nav>
    )
}