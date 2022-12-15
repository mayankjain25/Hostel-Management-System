import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
        <h2>Let's log you in!</h2>
    

            <form className={styles.formContainer}>
                <input type='text' placeholder='Roll Number' />
                <input type='email' placeholder='University Email Address' />
                <input type='email' placeholder='Password' />
                <button type='submit'>Login</button>

            </form>
        

        <h5>Don't have an account? <span className={styles.signUpText}>Sign Up</span></h5>
    </div>
  )
}

export default Hero