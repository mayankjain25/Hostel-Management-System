import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Warning from '/assets/warning.svg'

const UserNotExist = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',height:'100vh'}}>
        <Head>
            <title>Error Occurred</title>
        </Head>
        <center>
          
                <Image src={Warning} width={100} height={100} alt='warning-image'></Image>
                <h2>sigh! an error occurred</h2>
                <p>looks like you entered an incorrect email and password configuration</p>
                <p>please try again</p>
                <Link href='/Login'>

                <Button variant="outlined" color="success">Login</Button>
                
                </Link>
                <Link href='/'>

                <Button style={{marginLeft:'20px'}} variant="outlined" color="success">Home Page</Button>
                
                </Link>
           

        </center>
    </div>
  )
}

export default UserNotExist