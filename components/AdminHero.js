import Head from 'next/head'
import React from 'react'
import styles from './AdminHero.module.css'
import { Button } from '@mui/material'
const AdminHero = () => {

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log('submit clicked')
    }
  return (
    
    <div style={{display:'flex',alignItems:'center',justifyContent:'center', flexDirection:'column'}}>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
        <h2 className={styles.mainText}>admin panel - hostel management system</h2>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input type="email" placeholder="hostel email" required />
            <input type="password" placeholder="hostel password" required />
            <Button variant="outlined" color="success" type="submit" style={{marginTop:'20px'}}>login</Button>
        </form>

        <div>
            <i class="fa-solid fa-lightbulb"></i>
            

        </div>
    </div>
  )
}

export default AdminHero