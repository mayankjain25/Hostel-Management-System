import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Avatar,Button,StyledBadge } from '@mui/material'
import styles from './IssueDisplay.module.css'
import Warning from '/assets/warning.svg'
import Image from 'next/image'
import Link from 'next/link'
// import bcrypt from 'bcrypt'

const IssueDisplay = ({email,password}) => {
    
    const [userInfo,setUserInfo] = useState()
    const [issueInfo,setIssueInfo] =useState()
    const [userIdHash,setUserIdHash] = useState()

    async function getIssueDetails(){
        // const res = axios.get(`http://localhost:5001/issues/${email}`,{
        //     headers:{
        //         'Content-Type': 'application/json',
        // }})

        // await setIssueInfo(res.data)

    }

    async function getUserDetails(){
        const res = await axios.get(`http://localhost:5001/users/${email}`,{
            headers:{
                'Content-Type': 'application/json',
                //  AccessControlAllowOrigin: '*',
            }
        })
        // console.log(res.data)
        await setUserInfo(res.data)
    }


    async function hashUserUniqueId(){
        const hash = await bcrypt.hashSync(userInfo._id,10)
        setUserIdHash(hash)
    }

    useEffect(()=>{
        getUserDetails();
        getIssueDetails();
        // hashUserUniqueId()
    },[])




  return (
   userInfo &&  <div>
        <div className={styles.profileCard}>
            {console.log(userInfo)}
            {/* {userInfo && <p>Name is {userInfo.name}</p>} */}
            <div className={styles.profileContainer}>

                <Avatar>{userInfo.name[0]}</Avatar>
                <p>Name: {userInfo.name}</p>
                <p>Hostel: {userInfo.hostelName}</p>
                <p>Room Number: {userInfo.roomNumber}</p>
            </div>

        </div>
        <div className='no-issues'>
            <Image src={Warning} width={40} height={40} style={{color:'gray'}}></Image>
            {!issueInfo && <p>no issues added currently</p>}
        </div>
        <Link href={{ pathname: '/createIssue', query: { data: JSON.stringify(userInfo._id) } }}>

            <Button variant="outlined" color="success">Add Issue</Button>
        </Link>
    </div>
  )
}

export default IssueDisplay