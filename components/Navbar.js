import React from 'react'
import styles from  "./Navbar.module.css"
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>LOGO</div>
        <li>Service Provider</li>
        <li>Traveler</li>
        <li>Why T&E</li>
        <li>Blog</li>
        <div>Account</div>
    </nav>
  )
}

export default Navbar