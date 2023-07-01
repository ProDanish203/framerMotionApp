import React from 'react'
import { motion } from "framer-motion";

export const Text = () => {
  return (
    <>
    <section className='w-full min-h-[60vh] flex gap-5 items-center justify-center'>
        <motion.h1
        className='text-6xl text-white font-bold'
        initial={{ x: "-500%", y: "-50%" }}
        animate={{ x: 0, y: "50%" }}
        transition={{
            delay: 0.2,
            duration: 0.6
        }}  
        whileHover={{ scale: 1.1, transitionDelay: 0 }}
        >
            Hello
        </motion.h1>
        <motion.h1
        className='text-6xl text-white font-bold'
        initial={{ x: "500%", y: "-50%" }}
        animate={{ x: 0, y: "50%" }}
        transition={{
            delay: 0.2,
            duration: 0.6 
        }}  
        whileHover={{ scale: 1.1}}
        >
            World
        </motion.h1>
    </section>
    </>
  )
}
