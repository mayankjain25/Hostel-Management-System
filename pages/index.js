import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Head>
        <title>Hostel Management System</title>
      </Head>
      <Navbar />
      <Hero />
      <Footer className={styles.footer} />
    </div>
  )
}
