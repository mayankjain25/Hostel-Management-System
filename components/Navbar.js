import React from 'react'
import styles from './Navbar.module.css'
import Clock from 'react-live-clock'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div>
          <Link href="/">

            <span className='bold-800'>Hostel</span> Management System
          </Link>
        </div>
        {/* <Clock format={'HH:mm:ss'} ticking={true} /> */}
    </div>
  )
}

export default Navbar