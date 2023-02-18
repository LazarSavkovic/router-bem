import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { useRef } from 'react';
import { useToggleThemeContext } from './ThemeProvider';

function Navbar(props) {
    const NavRef = useRef()
    const toggleTheme = useToggleThemeContext()

    function toggleShown() {
        NavRef.current.classList.toggle('shown')
    }

    return (
        <header className='Navbar'>
            <h1 className='logo'>Logo</h1>
            <nav ref={NavRef}>
                <div className='Links'><Link to='/' style={{ margin: '30px', textDecoration: 'none', color: 'white' }}>home</Link>
                    <Link to='/products/apples' style={{ margin: '30px', textDecoration: 'none', color: 'white' }}>apples</Link>
                    <Link to='/products/oranges' style={{ margin: '30px', textDecoration: 'none', color: 'white' }}>oranges</Link>
                    <Link to='/products/bananas' style={{ margin: '30px', textDecoration: 'none', color: 'white' }}>banana</Link>
                </div>
                <button onClick={toggleShown} className='timesBtn'><FaTimes /></button>
            </nav>
            <div className='navBtns'>
                <button onClick={toggleTheme} className='bulbBtn'><FaLightbulb /></button>
                <button onClick={toggleShown} className='barsBtn'><FaBars /></button>
            </div>

        </header>
    );
}

export default Navbar;