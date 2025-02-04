import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header} >
        <div className={styles.description}>wedding & portrait photographer in boston</div>
        <h5 className={styles.name}>Andrew Kusakin</h5>
        <nav>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/information">Information</Link>
            <Link href="/contact" className={styles.contact}>Contact</Link>
        </nav>
    </header>
  )
}
