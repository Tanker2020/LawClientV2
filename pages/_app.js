import styles from '../styles/Menu.css'
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import {useState,useEffect,useRef} from 'react'
import { motion, useAnimation, useCycle } from "framer-motion";
import { MantineProvider } from '@mantine/core';
import {NotificationsProvider} from '@mantine/notifications'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <MantineProvider theme={{colorScheme: 'dark'}}>
    <Menume/>
    <NotificationsProvider position='top-center'>
    <Component {...pageProps} />
    </NotificationsProvider>
    </MantineProvider>
  </>)
}

function Menume(){
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

 return(
  <motion.nav initial={false}
  animate={isOpen ? "open" : "closed"}
  custom={height}
  ref={containerRef}> 
  <motion.div className="background" variants={sidebar} />
  <MenuToggle toggle={() => {toggleOpen()}} />
  <Navigation disabled={!isOpen}/>
  </motion.nav>
  )
}
export default MyApp
