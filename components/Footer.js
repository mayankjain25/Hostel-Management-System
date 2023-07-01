import Head from 'next/head'
import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>

        <h3>developed with ❤️ and in 🇮🇳</h3>

    </div>
  )
}

export default Footer