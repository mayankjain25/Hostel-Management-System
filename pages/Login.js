import Head from 'next/head'
import React, { createContext, useState } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'


const UserContext = createContext({
  id:'',
      name:'',
      rollNumber:'',
      email:'',
      contact:'',
      hostelName:'',
      roomNumber:'',
      password:'',
      v:''
})

const Login = () => {
  
    const [user,setUser] = useState({
      id:'',
      name:'',
      rollNumber:'',
      email:'',
      contact:'',
      hostelName:'',
      roomNumber:'',
      password:'',
      v:''
      
    })
    
    const updateUser = (newUser) =>{
      setUser(newUser)
    }
  
  // setUser(newUser)


  return (
    // <UserContext.Provider value={{user,updateUser}}>

      <div>
          <Head>
              <title>Login - HMS</title>
          </Head>
          <Navbar />
          <Hero />
          {/* <Guest /> */}
          <Footer />
      </div>
    // </UserContext.Provider>
  )
}

// export {UserContext}
export default Login