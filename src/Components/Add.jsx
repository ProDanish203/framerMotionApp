import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

export const Add = () => {

    const [items, setItems] = useState([1, 2, 3])

    const add = () => {
        setItems((prev) => [...prev, prev.length + 1])
    }

    const remove = (elem) => {
        setItems((prev) => prev.filter((ele) => ele !== elem));
    }

  return (
    <>
    <div className='px-2 mb-10'>
        <button 
        className='bg-blue-400 text-white px-5 py-2 rounded-md outline-none shadow-md my-5'
        onClick={add}
        >Add</button>

        <motion.div
        key='unique'
        className='border-2 max-w-[400px] bg-white w-full flex flex-col gap-2 border-black p-2 rounded overflow-hidden'
        layout
        initial={{ height: 0}}
        animate={{ height: "auto"}}
        transition={{ 
            layout: { duration: 0.1}
        }}
        >
        <AnimatePresence
        initial={false}
        >
            {items.map((elem, idx) => (
                <motion.div 
                key={idx} 
                className='flex bg-gray-500 text-white px-3 p-2 rounded items-center justify-between'
                layout
                initial={{ 
                    opacity: 0,
                    X: "100"
                }}
                animate={{ 
                    opacity: 1, 
                    x: "auto"
                }}
                exit={{opacity: 0 }}
                transition={{
                        layout: { type: "spring", duration: 0.4 },
                        opacity: { duration: 0.4}
                }}
                >
                    <p>item {elem}</p>
                    <button
                    className=''
                    onClick={() => remove(elem)}
                    ><i className='fas fa-times'></i></button>
                </motion.div>
            ))}
        </AnimatePresence>
        </motion.div>

    </div>
    </>
  )
}
