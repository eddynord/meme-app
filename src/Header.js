import React from 'react';
import '../src/index.css'; 
import logo from "../src/trollface.png";
    
    
 
export default Header 
function Header() {
    return (
        <header className="header">
            <div className='header-content'>

                <div className='logo'>
                    <img src= {logo} alt="logo"/>
                    <span>Meme Generator</span>
                </div>

                <div className='header-title'>
                    <p>React Course - Project 3</p>
                </div>
            
            </div>

        </header>

    )
}
    
    