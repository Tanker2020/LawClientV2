import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1,
    display: 'block'
  },
  closed: {
    opacity: 0.9,
    transition: { staggerChildren: 0.05, staggerDirection: -1},
  }
};

export function Navigation({disabled}){
  const [isOpen, toggleOpen] = React.useState(false);
  return(
  <motion.ul variants={variants} id='test'>
      <MenuItem toggle={disabled} i={i} key={i} />
  </motion.ul>
  )
};

const i = 0;