import React from 'react'
import './Header.css'

const Header = () => {
    // TOGGLE NAVIGATION MENU
    const [navToggle , setNavToggle] = React.useState(false);
    const handleClick = () => setNavToggle(!navToggle);
    // TOGGLE NAVIGATION MENU

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className='nav_logo'>GMKrishna</a>

            <div className={navToggle ? "nav_menu show-menu" : "nav_menu" }>
                <ul className="nav_list grid">
                    <li className="nav_item">
                        <a href="#home" className='nav_link active-link'>
                        <i class="fa-solid fa-house nav_icon "></i> Home
                        </a>
                    </li> 
                    <li className="nav_item">
                        <a href="#about" className='nav_link'>
                        <i class="fa-solid fa-user nav_icon"></i> About
                        </a>
                    </li> 
                    <li className="nav_item">
                        <a href="#skills" className='nav_link'>
                        <i class="fa-solid fa-file-lines nav_icon"></i> &nbsp;Skills
                        </a>    
                    </li> 
                    <li className="nav_item">
                        <a href="#services" className='nav_link'>
                        <i class="fa-solid fa-briefcase nav_icon"></i> Services
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#portfolio" className='nav_link'>
                        <i class="fa-solid fa-images nav_icon" ></i> Portfolio
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact" className='nav_link'>
                        <i class="fa-solid fa-comments nav_icon"></i> Contact
                        </a>
                    </li> 
                </ul>
            </div>
            <div className="nav_toggle" onClick={(handleClick)}>
                { navToggle ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars-staggered"></i>}

            </div>
        </nav>
    </header>
  )
}

export default Header