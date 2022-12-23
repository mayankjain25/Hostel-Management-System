import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import Navbar from '../components/Navbar'
import Head from 'next/head'

const studentDashboard = () => {
  const {status,data} = useSession()
  // console.log(status)

  useEffect(()=>{
    if(status==="unauthenticated"){
      alert("You are not logged in! Redirecting to login page...")
      Router.push('/login')
    }
  },[status])
  // console.log(data)
  // console.log(session)
  if(status==="authenticated"){
    
    return (
      <div>
        <Head>
          <title>{data.user.name}'s Dashboard - HMS</title>
        </Head>
        <Navbar email={data.user.email} logOut='true'/>
        <center>
          <h2><i>hola</i>, {(data.user.name).toLowerCase()} </h2>
          <p>How's your day today?</p>

        </center>
      </div>
    )
  }
}

export default studentDashboard