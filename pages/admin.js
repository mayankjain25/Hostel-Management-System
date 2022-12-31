import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import AdminHero from '../components/AdminHero'



const admin = () => {
  return (
    <div>
        <Head>
            <title>Admin Panel - HMS</title>
        </Head>
        <Navbar />
        <AdminHero />
    </div>
  )
}

export default admin