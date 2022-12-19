import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const login = () => {
  return (
    <div>
        <Head>
            <title>Login - HMS</title>
        </Head>
        <Navbar />
        <Hero />
        <Footer />
    </div>
  )
}

export default login