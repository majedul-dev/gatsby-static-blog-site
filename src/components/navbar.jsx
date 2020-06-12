import React from 'react'
import { Link } from 'gatsby'

const Navbar = ({ headerStyles }) => {
    return (
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link></li>
          <li><Link to="/about" className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem}>About</Link></li>
          <li><Link to="/blog" className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
          <li><Link to="/contact" className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
        </ul>
      </nav>
    )
}

export default Navbar
