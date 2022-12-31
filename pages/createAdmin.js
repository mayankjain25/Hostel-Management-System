import { Button } from '@mui/material'
import React,{useState} from 'react'
import styles from '/components/AdminHero.module.css'
import Loader from '/assets/loader.gif'
import Image from 'next/image'

const createAdmin = () => {

    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState(null)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(e)
        console.log('submit clicked')
        setLoading(true)
        const res = await fetch('http://localhost:5001/admin/createAdmin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                hostelName:e.target[0].value,
                email:e.target[1].value,
                password:e.target[2].value
            })
        })

        setLoading(false)
        setMessage("admin created successfully")

        setTimeout(()=>{
            setMessage(null)
        },3000)
    }
  return (
    <div>
        <center>

        <h2>create admin</h2>
        </center>
        <form style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} className={styles.formContainer} onSubmit={handleSubmit}>
            <input style={{width:'50%'}} type='text' name='hostelName' placeholder='hostel name' />
            <input style={{width:'50%'}} type='email' name='hostelEmail' placeholder='hostel email' />
            <input style={{width:'50%'}} type='password' name="password" placeholder='hostel password' />
            <Button variant="outlined" color="success" type="submit" style={{marginTop:'20px'}}>create admin</Button>
        </form>
        <center>

         {loading && <Image style={{marginTop:'30px'}} src={Loader} alt="loading" width={40} height={40} />}
            {message && <p style={{marginTop:'30px', color:'green',fontWeight:'bold'}}>{message}</p>}
        </center>
    </div>
  )
}

export default createAdmin