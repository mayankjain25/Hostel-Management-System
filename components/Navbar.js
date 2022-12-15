import React from 'react'
import styles from './Navbar.module.css'
import Clock from 'react-live-clock'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div>
            <span className='bold-800'>Hostel</span> Management System
        </div>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'IST'} />
    </div>
  )
}

export default Navbar