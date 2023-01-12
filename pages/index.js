import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import { IconGavel } from '@tabler/icons'
import { Blockquote } from '@mantine/core'
import Router from 'next/router'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <img src="/clixk.jpg" style={{marginLeft: "auto",marginRight:"auto",display: 'block',marginBottom: '0%'}} height={700} width={2000}/>
      
        <p style={{position: 'absolute',top: '10px',marginLeft: '3.5%',fontFamily: 'Georgia',fontStyle: 'italic'}}>WHS Law Club</p>
        <motion.buttom whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }} onClick={()=>{Router.push("/sponsor/sponsorform")}} style={{position: 'absolute',top: '10px',marginLeft: '30%',marginTop:'1%',fontFamily: 'Georgia',fontStyle: 'italic',color: '#D309E1',fontSize: 17,textShadow: `0 0 1em #D309E1, 0 0 3em #D309E1`,textDecoration: 'underline 2px '}}>Info for Sponsors</motion.buttom>
        <motion.buttom whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }} onClick={()=>{Router.push("/interest/interestform")}} style={{position: 'absolute',top: '10px',marginLeft: '50%',marginTop:'1%',fontFamily: 'Georgia',fontStyle: 'italic',color: '#9C1AFF',fontSize: 17,textShadow: `0 0 1em #9C1AFF, 0 0 3em #9C1AFF`,textDecoration: 'underline 2px '}}>Interest Form</motion.buttom>
        <motion.buttom whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }} onClick={()=>{Router.push("/media/videopage")}} style={{position: 'absolute',top: '10px',marginLeft: '70%',marginTop:'1%',fontFamily: 'Georgia',fontStyle: 'italic',color: '#4400FF',fontSize: 17,textShadow: `0 0 1em #4400FF, 0 0 3em #4400FF`,textDecoration: 'underline 2px '}}>Media</motion.buttom>
        <IconGavel style={{position: 'absolute',top: '25px',marginLeft: '180px',color: 'white'}} size={25} stroke={1.5} />

        <div style={{background: '#071330',padding: '5%',display: 'block'}}>
          <Blockquote cite="- Louis D. Brandeis"> 
            If we desire respect for the law, we must first make the law respectable. 
          </Blockquote>
          <p style={{marginLeft: "25%",fontFamily: 'Fancy',fontSize: 25,fontWeight: 'lighter'}}>
          The quote is suggesting that in order for individuals to have respect for the laws and legal system, the laws themselves must be seen as worthy of respect. In other words, if the laws are just and fair, and are applied equally to all people, then people will be more likely to respect and follow them.

In terms of a club for high schoolers themed around law, this quote emphasizes the importance of educating young people about the legal system and encouraging them to understand the importance of just and fair laws. The club could focus on teaching students about their rights and responsibilities under the law, and engaging them in discussions and activities that promote a deeper understanding of the legal system and its role in society. Additionally, the club could also encourage students to think critically about laws and the way they are applied, and to work towards making the legal system more fair and just.
          </p>
        </div>

      <main className={styles.main}>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="/sponsor/sponsorform"
            className={styles.card}
          >
            <div>
            <h2>Test Query &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
            </div>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with NextJS by Nishanth
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}