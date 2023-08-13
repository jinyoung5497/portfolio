import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contacts() {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center flex-col gap-12 mx-32'>
        <h1 className='text-[100px] font-bold my-5 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>
          Contact Me
        </h1>
      </div>
      <Footer />
    </>
  )
}
