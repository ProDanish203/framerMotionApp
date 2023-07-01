import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className='flex items-center justify-between px-7 py-3 bg-purple-500 text-white fixed top-0 left-0 right-0'>
        <h2 className='text-2xl font-bold'>Animations</h2>
        <nav className='flex items-center justify-center gap-5'>
            <Link to="add">Add/Remove</Link>
            <Link to="heading">Heading</Link>
            <Link to="drag">Drag</Link>
            <Link to="hover">Hover</Link>
            <Link to="scroll">Scroll Trigger</Link>
        </nav>
    </header>
  )
}
