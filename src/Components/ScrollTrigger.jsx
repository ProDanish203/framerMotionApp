import React from 'react'
import { motion } from "framer-motion";

export const ScrollTrigger = () => {
  return (
    <>
    <section className='min-h-[60vh] w-full flex items-center justify-center'>

    <div className='flex flex-col items-center justify-center gap-10'>


        <div className='flex flex-col items-center justify-center gap-10 min-h-[80vh]'>

        <motion.div 
        className='bg-purple-500 w-[200px] h-[180px] shadow-2xl rounded'
        initial={{scale: 0, opacity: 0, y: "-100%"}}
        whileInView={{ opacity: 1, scale: 1, y: 0}}
        transition={{ duration: 0.6 }}
        viewport={{once: true}}
        ></motion.div>

        </div>

        <div className='flex flex-col items-center justify-center gap-10 min-h-[100vh]'>

        <motion.div 
        className='bg-purple-500 w-[200px] h-[180px] shadow-2xl rounded'
        initial={{scale: 0, opacity: 0, x: "-200%"}}
        whileInView={{ opacity: 1, scale: 1, x: 0}}
        transition={{ duration: 0.6 }}
        viewport={{once: true}}
        >

        </motion.div>

        </div>

        <div className='flex flex-col items-center justify-center gap-10 min-h-[100vh]'>

        <motion.div 
        className='bg-purple-500 w-[200px] h-[180px] shadow-2xl rounded'
        initial={{scale: 0, opacity: 0, x: "-200%"}}
        whileInView={{ opacity: 1, scale: 1, x: 0}}
        transition={{ duration: 0.6 }}
        viewport={{once: true}}
        >

        </motion.div>

        </div>

    </div>
    </section>
    </>
  )
}
