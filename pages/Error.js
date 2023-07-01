import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Warning from '/assets/warning.svg'

const Error = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',height:'100vh'}}>
        <Head>
            <title>Error Occurred</title>
        </Head>
        <center>
          
                <Image src={Warning} width={100} height={100} alt="warning-text"></Image>
                <h2>sigh! an error occurred</h2>
                <p>please try again</p>
                <Link href='/'>

                <Button variant="outlined" color="success">Home Page</Button>
                
                </Link>
                <Link href='/signup'>

                <Button style={{marginLeft:'20px'}} variant="outlined" color="success">Sign Up</Button>
                
                </Link>
           

        </center>
    </div>
  )
}

export default Error