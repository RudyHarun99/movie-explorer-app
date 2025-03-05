import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import HamburgerIcon from '@/assets/Menu.svg';
// import SearchIcon from '@/assets/Search.svg';
import { Logo } from '@/components/Logo';
import { Link } from 'react-scroll';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fungsi toggle untuk membuka atau menutup menu
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={clsx(styles.header, 'container')}>
      {/* LOGO */}
      <Logo />

      {/* Navbar untuk desktop */}
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='favourites' smooth={true} duration={500}>
              About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon for mobile */}
      <div
        className={styles.hamburger}
        onClick={toggleMenu} // Panggil fungsi toggleMenu saat icon close di klik
        role='button'
        aria-label='Open Menu'
      >
        <HamburgerIcon />
      </div>

    </header>
  );
};
