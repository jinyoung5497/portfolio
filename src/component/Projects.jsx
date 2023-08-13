import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center flex-col gap-12 mx-32'>
        <h1 className='text-[100px] font-bold my-5 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text'>
          Projects
        </h1>
      </div>
      <Footer />
    </>
  )
}
