import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Router from 'next/router'
import Head from 'next/head'
import {FormControl,InputLabel,Select,MenuItem} from '@mui/material'
import Link from 'next/link'
// import styles from '/styles/issue.css'

const createIssue = () => {

    const [userId,setUserId] = useState()
    const [issuePriority, setIssuePriority] = useState()
    const [issueStatus, setIssueStatus] = useState()

    useEffect( ()=>{
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      let value = params.data;
      setUserId(value)
   
    },[])

    const handleSubmit =async (e) =>{

        e.preventDefault();

        console.log(e)
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)
        console.log(e.target[4].value)


        const res = await fetch(`http://localhost:5001/issues/${userId}`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                title: e.target[0].value,
                description: e.target[1].value,
                status: e.target[2].value,
                priority: e.target[4].value,
                student: userId
            })
        })

        console.log(res)
        if(res.status===200){
            Router.push('/StudentDashboard')
        }

      

    }

  return (
    <div>
        <Head>
            <title>Create Issue - HMS</title>
        </Head>
        <Navbar  logOut='true'/>
        <center>

        <h2>fill in your issue details</h2>
        </center>
        <form className='issues-page-form'  onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="issue title"></input>
            <input type="text" name="description" placeholder="issue description"></input>
            <FormControl sx={{ m: 1, minWidth: 138 }}>
                <InputLabel id="demo-simple-select-label" name="status">Issue Status</InputLabel>
                <Select
                    value={issueStatus}
                    onChange={(e)=>setIssueStatus(e.target.value)}
                >
                    <MenuItem value='Ongoing'>Ongoing</MenuItem>
                    <MenuItem value='Pending'>Pending</MenuItem>
                    <MenuItem value='Resolved'>Resolved</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 138 }}>
            <InputLabel id='123' name="priority">Issue Priority</InputLabel>
                <Select
                    value={issuePriority}
                    onChange={(e)=>setIssuePriority(e.target.value)}
                >
                    <MenuItem value={-1}>-1</MenuItem>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                </Select>
            </FormControl>
            {/* <input type="text" placeholder="issue type"></input> */}
            {/* <input type="text" name="status" placeholder="issue status"></input>
            <input type="text" name="priority" placeholder="issue priority"></input> */}
            <Button variant="outlined" color="success" type="submit">Submit</Button>
        </form>

        <Link href="/StudentDashboard">
            <center>

            <Button variant="outlined" style={{marginTop:'30px'}} color="success">back to dashboard</Button>
            </center>
        </Link>

    </div>
  )
}

export default createIssue