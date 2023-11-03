import React from 'react'
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import DarkModeToggle from '../components/DarkModeToggle/DarkModeToggle'

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={100} height={80} />
        </Link>
      </div>
        <DarkModeToggle />
      <nav className={styles.navbar}>
        <div >

          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href='/'>
                Home
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href='/about'>
                About
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href='/movie'>
                Movie
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href='/contact'>
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
