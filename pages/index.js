import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FrontComponent from '../components/FrontComponent'
import {Toaster,toast} from 'react-hot-toast'

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <div><Toaster /></div>
      <Head>
        <title>Hostel Management System</title>
      </Head>
      <Navbar />
      <FrontComponent />
      {/* <Hero /> */}
      <Footer className={styles.footer} />
    </div>
  )
}
