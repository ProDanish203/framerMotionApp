import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Add } from "../Components/Add";
import { Text } from "../Components/Text";
import { Drag } from '../Components/Drag';
import { Hover } from '../Components/Hover';
import { ScrollTrigger } from '../Components/ScrollTrigger';

export const Router = () => {
  return (
    <Routes>
        <Route path='add' element={<Add/>}/>
        <Route path='heading' element={<Text/>}/>
        <Route path='drag' element={<Drag/>}/>
        <Route path='hover' element={<Hover/>}/>
        <Route path='scroll' element={<ScrollTrigger/>}/>
    </Routes>
  )
}
