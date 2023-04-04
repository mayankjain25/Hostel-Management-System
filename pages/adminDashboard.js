import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const adminDashboard = () => {

    const {status,data} = useSession()

    useEffect(()=>{
        // if(status==="unauthenticated"){
        //   // alert("You are not logged in! Redirecting to login page...")
        //   Router.push('/login')
        // }
        console.log(status)
     },[status])
  return (
    <div>
        <Head>
            <title>Admin Dashboard - HMS</title>
        </Head>
        <Navbar logOut={true} admin={true} />
    </div>
  )
}

export default adminDashboard