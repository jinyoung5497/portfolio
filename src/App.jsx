import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Contacts, Projects } from './component'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contacts />} />
        </Routes>
      </div>
    </>
  )
}

export default App
