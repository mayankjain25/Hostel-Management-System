import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Avatar,Button,StyledBadge } from '@mui/material'
import styles from './IssueDisplay.module.css'
import Warning from '/assets/warning.svg'
import Image from 'next/image'
import Link from 'next/link'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const IssueDisplay = ({email,password}) => {
    
    const [userInfo,setUserInfo] = useState()
    const [issueInfo,setIssueInfo] =useState()
    const [userIdHash,setUserIdHash] = useState()

    async function getIssueDetails(){
        let id = userInfo._id
        id= String(id)

        const res = await fetch(`https://hms-backend-89o3.onrender.com/issues/${String(id)}`).then((res)=>res.json()).then((data)=>setIssueInfo(data))
        
    }

    async function getUserDetails(){
        const res = await axios.get(`https://hms-backend-89o3.onrender.com/users/${email}`,{
            headers:{
                'Content-Type': 'application/json',
            }
        })
        await setUserInfo(res.data)
    }



    useEffect(()=>{
        getUserDetails();
    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        userInfo && getIssueDetails()
    },[userInfo]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
   userInfo &&  <div>

        <div className={styles.issueDisplayContainer}>

            <div>
                <h3>your enquiries</h3>
            {issueInfo && <TableContainer component={Paper} sx={{ minWidth: 650, maxWidth: 800 }}>
            <Table  size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow sx={{backgroundColor: 'lightgray'}}>
                        <TableCell sx={{fontWeight: 'bold',color:'black'}}>Title</TableCell>
                        <TableCell align="center" sx={{fontWeight: 'bold',color:'black'}}>Description</TableCell>
                        <TableCell align="center" sx={{fontWeight: 'bold',color:'black'}}>Status</TableCell>
                        <TableCell align="center" sx={{fontWeight: 'bold',color:'black'}}>Priority</TableCell>
                        {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                {issueInfo.map((issue) => (
                    // console.log(issue)
                    <TableRow
                    key={issue.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {issue.title}
                    </TableCell>
                    <TableCell align="center" sx={{maxWidth: 200, }}>{issue.description}</TableCell>
                    <TableCell align="center">{issue.status}</TableCell>
                    <TableCell align="center">{issue.priority}</TableCell>
                    {/* <TableCell align="right">{row.protein}</TableCell> */}
                    </TableRow>
                ))
                
                
                }
                
                </TableBody>
            </Table>
        </TableContainer>}

        {
                  issueInfo &&  issueInfo.length===0 &&  <center> <p style={{color:'gray'}}>you haven&apos;t added any issue yet</p></center> 
        }

        <Link href={{ pathname: '/CreateIssue', query: { data: JSON.stringify(userInfo._id) } }}>
            <Button variant="outlined" color="success" style={{marginTop:'50px'}}>Add Issue</Button>
        </Link>
    </div>

        <div className={styles.profileContainer}>
            <h3>your profile</h3>


            <div className={styles.profileCard}>

                    <Avatar>{userInfo.name[0]}</Avatar>
                    <p>Name: {userInfo.name}</p>
                    <p>Hostel: {userInfo.hostelName}</p>
                    <p>Room Number: {userInfo.roomNumber}</p>
            </div>

            </div>
        </div>
        {!issueInfo && <div className='no-issues'>
            <Image src={Warning} width={40} height={40} style={{color:'gray'}} alt='warning-image'></Image>
            <p>no issues added currently</p>
        </div>}
        

        

        

    </div>
  )
}

export default IssueDisplay