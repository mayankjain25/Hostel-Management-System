import React, { useEffect,useState } from 'react'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { useContext } from 'react'
import { UserContext } from './login'
import axios from 'axios'
import IssueDisplay from '../components/IssueDisplay'


const studentDashboard = () => {
  const {status,data} = useSession()
  const [stat,setStat] = useState('unauthenticated')
  const [userInfo,setUserInfo] = useState({
    email:'',password:''
  })
  // console.log(status)

  
  useEffect(()=>{
    if(status==="unauthenticated"){
      // alert("You are not logged in! Redirecting to login page...")
      Router.push('/login')
    }
 },[status])

 async function getUser(){
  if(stat==='authenticated'){
    const {email,password} = data.user
    const res = await axios.post('/api/login',{
      email,password
    })
    const user = await res.data
    console.log(user)
  }
 }


//  useEffect(()=>{
//   getUser()
//  },[])
 

  // console.log(myData)

  if(status==="authenticated"){

    // const [myData,setMyData] = useState(null)
   
    return (
      <div>
        <Head>
          <title>{data.user.name}'s Dashboard - HMS</title>
        </Head>
        <Navbar email={data.user.email} logOut='true'/>
        <center>
          <h2><i>hola</i>, {(data.user.name).toLowerCase()} </h2>
          <p>How's your day today?</p>
        {/* {findUserProfile()} */}
        <IssueDisplay email={data.user.email} password={data.user.password}/>

        </center>
      </div>
    )
  }
}

export default studentDashboard