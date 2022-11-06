import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { RenderData } from './RenderData'

export const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/display_data" element={<RenderData/>}/>
    </Routes>
    </>
  )
}
