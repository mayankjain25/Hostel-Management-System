import { Button } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styles from './FrontComponent.module.css'
import Guest from './Guest'
// import 

const FrontComponent = () => {
  return (
    <div>
        <Head>
            <title>Hostel Management System</title>
        </Head>
        
          <div className={styles.container}>

            <p>welcome to the</p>
            <h1 className={styles.mainText}>hostel management system. </h1>
            <p>please <span style={{color:'red',fontWeight:'bold'}}>login/signup</span> to continue</p>
            
              <Link href='/Login'><Button variant="outlined" color="error" style={{marginTop:'10px'}}>Login</Button></Link>
              <Link href='/Signup'><Button variant="outlined" color="error" style={{marginLeft:'20px',marginTop:'10px'}}>Sign Up</Button></Link>
          </div>


        
    </div>
  )
}

export default FrontComponent