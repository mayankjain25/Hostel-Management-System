import React from 'react'
import styles from './Navbar.module.css'
import Clock from 'react-live-clock'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { Button } from '@mui/material'

const Navbar = ({email,logOut}) => {
  return (
    <div className={styles.container}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Link href="/">

            <span className='bold-800'>Hostel</span> Management System  
          </Link>
          <span style={{marginLeft:'20px'}}>  | {new Date().toDateString()}</span>
        </div>
        {/* <Clock format={'HH:mm:ss'} ticking={true} /> */}
          <div style={{display:'flex',alignItems:'center',justifyContent:"center"}}>
          <p>{email}</p>
          {logOut && <Button variant="outlined" color="error" onClick={()=>signOut({callbackUrl: '/'})} style={{marginLeft:'10px'}}>logout</Button>}

          </div>
    </div>
  )
}

export default Navbar