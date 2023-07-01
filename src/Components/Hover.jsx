import React, { useState } from 'react'
import { motion } from "framer-motion";

export const Hover = () => {

    const [card, setcard] = useState(false)

  return (
    <>
    <section className='flex items-center justify-center min-h-[60vh] w-full'>

        <motion.div
        whileHover={{
            scale: 1.1
        }}
        transition={{
            layout: {
                duration: 1,
                type: "spring"
            }
        }}
        layout
        className='flex items-center justify-center flex-col min-w-[200px] min-h-[180px] rounded bg-purple-500 text-white shadow-2xl'
        onClick={() => setcard(prev => !prev)}
        >
            <motion.h3
            className='text-2xl text-white'
            >Hover or Click</motion.h3>

            {
                card && (
                    <motion.p
                    className='w-[600px] h-auto px-3 py-5'
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus, tempora architecto vel molestias culpa iusto non qui quia iste magnam obcaecati quos nam ratione omnis debitis doloribus dolor? Dolores!
                    </motion.p>
                )
            }
        </motion.div>

    </section>
    </>
  )
}
