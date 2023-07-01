import React from 'react'
import { motion } from "framer-motion";

export const Drag = () => {
  return (
    <>
    <section className='w-full min-h-[60vh] flex items-center'>
        <div className='flex items-center justify-between gap-5 w-full'>

            <div className=''>
                <p className='text-white text-center mb-5 select-none'>No Constraint</p>
                <motion.div 
                className='w-[150px] h-[130px] rounded bg-purple-600 cursor-grab'
                drag
                >
                </motion.div>
            </div>

            <div className=''>
                <p className='text-white text-center mb-5 select-none'>Drag Y</p>
                <motion.div  
                className='w-[150px] h-[130px] rounded bg-purple-600 cursor-grab'
                drag="y"
                >
                </motion.div>
            </div>

            <div className=''>
                <p className='text-white text-center mb-5 select-none'>Drag Constraint</p>
                <motion.div 
                className='w-[150px] h-[130px] rounded bg-purple-600 cursor-grab'
                drag
                dragConstraints={{ left: 0, right: 50, top: 0, bottom: 100}}
                >
                </motion.div>
            </div>

        </div>
    </section>
    </>
  )
}
