import { Button } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../components/signup.module.css'
import Head from 'next/head'
import { Toaster,toast } from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/router'
import Router from 'next/router'
const Signup = () => {

  // const router = useRouter()
  const handleSubmit = async (e)=>{
    e.preventDefault();

    const res = await axios.post(`https://hms-backend-89o3.onrender.com/users/`, {
      name: e.target[0].value,
      rollNumber: e.target[1].value,
      email: e.target[2].value,
      contact: e.target[3].value,
      hostelName: e.target[4].value,
      roomNumber: e.target[5].value,
      password: e.target[6].value,

    })
    if(res.status === 200){
      console.log(res)
      console.log('user created')
      toast.success("User created successfully")
      setTimeout(()=>{
         Router.push('/')
      },1000)
    }
    else{
      toast.error("User not created")
      router.push('/Error')
    }
  }
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

        <form onSubmit={handleSubmit} className={styles.signUpForm}>
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