import { Button } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../components/signup.module.css'
import Head from 'next/head'
const signup = () => {
  return (
    <div>
      <Head>
          <title>Sign Up - HMS</title>
      </Head>
      <Navbar />
      <div className={styles.mainContainer}>

        <h1 className={styles.mainText}>let us know about you</h1>
        <p className={styles.subText}>(it won't take long)</p>

        <form className={styles.signUpForm}>
          <input type='text' placeholder='name' />
          <input type='text' placeholder='roll number' />
          <input type='email' placeholder='university email address' />
          <input type='number' placeholder='contact number' />
          <input type='text' placeholder='hostel name' />
          <input type='text' placeholder='room number' />
          <Button type="submit" variant="outlined" color="error" className={styles.submitButton}>Sign Up</Button>

        </form>
      </div>
      <Footer />
    </div>
  )
}

export default signup