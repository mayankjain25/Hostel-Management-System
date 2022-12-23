import { Button } from '@mui/material'
import React, { useState } from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import {signIn } from 'next-auth/react'
import { useEffect } from 'react'

const Hero = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [message,setMessage] = useState(null)

  // useEffect(()=>{
  //   console.log(email)
  // },email)
  async function handleSubmit(e){
    e.preventDefault()
    // const res = await fetch('/api/login',{
    //   method:'POST',
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password
    //   })
    // }).then((res)=>res.json())

    // const token = res.token
    // if(token){
    //   Router.push('/studentDashboard')
    // }
    console.log(email,password)
    let options = {redirect:false,email,password}
    const res = await signIn('credentials',options)
    setMessage(null)
    if(res?.error){
      setMessage(res.error)
    }

    console.log(res)
    return Router.push('/studentDashboard')

  }
  return (
    <div className={styles.container}>
        <h2>let's log you in!</h2>
    

            <form method="post" action="/api/login" className={styles.formContainer}>
                {/* <input type='text' name="rollNumber" placeholder='roll number' /> */}
                <input type='email' name="email" placeholder='university email address' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type='password' name="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <Button variant="outlined" color="success" onClick={handleSubmit} style={{marginTop:'20px'}}>login</Button>

            </form>
        
        

        <h5>don't have an account? <Link href='/signup'><span className={styles.signUpText}>sign up</span></Link></h5>
            <Link href="/">

            <Button variant="outlined" style={{marginTop:'10px'}}>Home Page</Button>
            </Link>
            <p style={{color:'red'}}>{message}</p>
    </div>
  )
}

export default Hero