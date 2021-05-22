import styles from '../styles/Toolbar.module.css'
import Link from 'next/link'
export const Toolbar = () => {
  return(
      <nav className={styles.nav}>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/feed/1"><a>Feed</a></Link></li>
            <li><Link href="/eom"><a>EOM</a></Link></li>
            <li><Link href="https://www.linkedin.com/in/rudrakishore/"><a>Profile</a></Link></li>
        </ul>
      </nav>
  )
}