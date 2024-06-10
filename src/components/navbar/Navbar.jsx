"use client"

import React from 'react'
import Link from 'next/link'
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
 
];


const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Xpert 360 Agency</Link>
      <div className={styles.links}>
        {links.map(link => <Link key={link.id } href={link.url} className={styles.link}>{link.title}</Link> )}
      </div>
      <button className={styles.button} onClick={() => {console.log("signed out");

      }}>
            Logout
          </button>
    </div>
  )
}

export default Navbar