import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Avatar,StyledBadge } from '@mui/material'
import styles from './IssueDisplay.module.css'

const IssueDisplay = ({email,password}) => {

    async function getIssueDetails(){
        const res = await axios.get('/api/issue')
        const issue = await res.data
        console.log(issue)
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

    useEffect(()=>{
        getUserDetails();
        // getissueDetails();
    },[])


    const [userInfo,setUserInfo] = useState()


  return (
    <div>
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
    </div>
  )
}

export default IssueDisplay