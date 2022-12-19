import { Button } from '@mui/material'
import React from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className={styles.container}>
        <h2>let's log you in!</h2>
    

            <form className={styles.formContainer}>
                <input type='text' name="rollNumber" placeholder='roll number' />
                <input type='email' name="email" placeholder='university email address' />
                <input type='email' name="password" placeholder='password' />
                <Button variant="outlined" color="success" type="submit">login</Button>

            </form>
        
        

        <h5>don't have an account? <Link href='/signup'><span className={styles.signUpText}>sign up</span></Link></h5>
            <Link href="/">

            <Button variant="outlined" style={{marginTop:'10px'}}>Home Page</Button>
            </Link>
    </div>
  )
}

export default Hero