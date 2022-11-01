import * as React from "react";
import { useCycle } from "framer-motion";
import { motion } from "framer-motion";
import Router from 'next/router'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF",'#0910D5'];
const words = ['About Club','Sponsor Info','Interest Form','Media','Ideas?','Help Tickets']

export const MenuItem = ({i,toggle}) => {
  const style = {fontSize: 15,background: 'black' ,border: `2px solid ${colors[i]}`,color: colors[i],boxShadow: `inset 0 0 0.5em 0 ${colors[i]}, 0 0 01em 0 ${colors[i]}`,textShadow: `0 0 0.125em ${colors[i]}, 0 0 0.45em ${colors[i]}`};

  function process(id,e){
  }

  return (
    <div>
      <motion.li
      onClick={(e)=>process('about',e)}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <button disabled={toggle} onClick={()=>{Router.push("/")}} className="text-placeholder" style={{fontSize: 15,background: 'black' ,border: `2px solid #FF004C`,color: "#FF004C",boxShadow: `inset 0 0 0.5em 0 #FF004C, 0 0 01em 0 #FF004C`,textShadow: `0 0 0.125em #FF004C, 0 0 0.45em #FF004C`}}>Home Page</button>
    </motion.li>
    <motion.li
      onClick={(e)=>process('about',e)}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <button disabled={toggle} onClick={()=>{Router.push("/about")}} className="text-placeholder" style={style}>{words[i]}</button>
    </motion.li>
    <motion.li 
    onClick={(e)=>process('spon',e)}
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}>
    <button disabled={toggle} onClick={()=>Router.push("/sponsor/sponsorform")} className="text-placeholder" style={{fontSize: 15,background: 'black' ,border: `2px solid ${colors[1]}`,color: colors[1],boxShadow: `inset 0 0 0.5em 0 ${colors[1]}, 0 0 01em 0 ${colors[1]}`,textShadow: `0 0 0.125em ${colors[1]}, 0 0 0.45em ${colors[1]}`}}>{words[i+1]}</button>
    </motion.li>
    <motion.li
    onClick={(e)=>process('interest',e)}
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}>
    <button disabled={toggle} onClick={()=>Router.push("/interest")} className="text-placeholder" style={{fontSize: 15,background: 'black' ,border: `2px solid ${colors[2]}`,color: colors[2],boxShadow: `inset 0 0 0.5em 0 ${colors[2]}, 0 0 01em 0 ${colors[2]}`,textShadow: `0 0 0.125em ${colors[2]}, 0 0 0.45em ${colors[2]}`}}>{words[i+2]}</button>
    </motion.li>
    <motion.li
    onClick={(e)=>process('media',e)}
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}>
    <button disabled={toggle} onClick={()=>Router.push("/media")} className="text-placeholder" style={{fontSize: 15,background: 'black' ,border: `2px solid ${colors[3]}`,color: colors[3],boxShadow: `inset 0 0 0.5em 0 ${colors[3]}, 0 0 01em 0 ${colors[3]}`,textShadow: `0 0 0.125em ${colors[3]}, 0 0 0.45em ${colors[3]}`}}>{words[i+3]}</button>
    </motion.li>
    <motion.li
    onClick={(e)=>process('idea',e)}
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}>
    <button disabled={toggle} onClick={()=>Router.push("/ideas")} className="text-placeholder" style={{fontSize: 15,background: 'black' ,border: `2px solid ${colors[4]}`,color: colors[4],boxShadow: `inset 0 0 0.5em 0 ${colors[4]}, 0 0 01em 0 ${colors[4]}`,textShadow: `0 0 0.125em ${colors[4]}, 0 0 0.45em ${colors[4]}`}}>{words[i+4]}</button>
    </motion.li>
    <motion.li
    onClick={(e)=>process('help',e)}
    variants={variants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}>
    <button disabled={toggle} onClick={()=>Router.push("/help")} className="text-placeholder" style={{fontSize: 15,background: 'black' ,border: `2px solid ${colors[5]}`,color: colors[5],boxShadow: `inset 0 0 0.5em 0 ${colors[5]}, 0 0 01em 0 ${colors[5]}`,textShadow: `0 0 0.125em ${colors[5]}, 0 0 0.45em ${colors[5]}`}}>{words[i+5]}</button>
    </motion.li>
    </div>
  );
};
