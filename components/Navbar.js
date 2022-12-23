import React from 'react'
import styles from './Navbar.module.css'
import Clock from 'react-live-clock'
import Link from 'next/link'

const Navbar = ({email}) => {
  return (
    <div className={styles.container}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Link href="/">

            <span className='bold-800'>Hostel</span> Management System
          </Link>
          <div>
          <p>{email}</p>

          </div>
        </div>
        {/* <Clock format={'HH:mm:ss'} ticking={true} /> */}
    </div>
  )
}

export default Navbar