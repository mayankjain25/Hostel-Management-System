import React from 'react'
import styles from './Guest.module.css'

const Guest = () => {
  return (
    <div className={styles.guestContainer}>
        <p>guest login</p>
        <p style={{marginTop:'-10px'}}>email: <span style={{fontWeight:'bold'}}>guest@kiit.ac.in</span>, password: <span style={{fontWeight:'bold'}}>guest</span></p>
        <p></p>
    </div>
  )
}

export default Guest