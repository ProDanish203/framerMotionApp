import React from 'react'
import { motion, useScroll } from "framer-motion";

export const ScrollBar = () => {

    const { scrollYProgress } = useScroll()

  return (
    <motion.div
    className='fixed top-14 right-0 left-0 h-2 bg-red-500' 
    style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%"
    }}
    >


    </motion.div>
  )
}
