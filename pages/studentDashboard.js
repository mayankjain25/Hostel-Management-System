import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import Navbar from '../components/Navbar'

const studentDashboard = () => {
  const {status,data} = useSession()
  console.log(status)

  useEffect(()=>{
    if(status==="unauthenticated"){
      alert("You are not logged in! Redirecting to login page...")
      Router.push('/login')
    }
  },[status])
  console.log(data)
  // console.log(session)
  if(status==="authenticated"){
    
    return (
      <div>
        <Navbar email={data.user.email}/>
        <center>
          <h2><i>hola</i>, {(data.user.name).toLowerCase()} </h2>
          <p>How's your day today?</p>

        </center>
      </div>
    )
  }
}

export default studentDashboard