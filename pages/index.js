import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
export default function Home() {
  return (
    <section className='page-container home'>
      <Head>
        <title>Next.js News App</title>
        <meta title="description" content="Your one stop shop for the letest news articles"/>
      </Head>
      <main className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Your one stop shop for the letest news articles</h3>
        <Link href="/feed/1"><a>Start Reading</a></Link>
      </main>
        </section>
  )
}
