import React from 'react';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}> 
        <div>
            <img src="logo.svg" alt="" width={170} />
        </div>
      <ul className={styles['navbar-list']}> 
        <li className={styles['navbar-item']}>Home</li>
        <li className={styles['navbar-item']}>Products</li> 
        <li className={styles['navbar-item']}>Benefits</li> 
        <li className={styles['navbar-item']}>Packages</li> 
      </ul>
    </nav>
  );
};

export default Navbar;
