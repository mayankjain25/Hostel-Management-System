import { Button } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../components/signup.module.css'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

const Signup = () => {
  return (
    <div>
      <div><Toaster /></div>
      <Head>
          <title>Sign Up - HMS</title>
      </Head>
      <Navbar />
      <div className={styles.mainContainer}>

        <h1 className={styles.mainText}>let us know about you</h1>
        <p className={styles.subText}>(it won&apos;t take long)</p>

        <form method="post" action="/api/register" className={styles.signUpForm}>
          <input type='text' name="name" placeholder='name' />
          <input type='text' name="rollNumber" placeholder='roll number' />
          <input type='email' name="email" placeholder='university email address' />
          <input type='number' name="contact" placeholder='contact number' />
          <input type='text' name="hostelName" placeholder='hostel name' />
          <input type='text' name="roomNumber" placeholder='room number' />
          <input type='password' name="password" placeholder='choose a password' />
          <Button type="submit" variant="outlined" color="error" className={styles.submitButton}>Sign Up</Button>

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Signup