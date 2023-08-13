import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { pdf } from '../assets'

export default function About() {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center flex-col gap-12 mx-32'>
        <h1 className='text-[100px] font-bold my-5 bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text'>
          About Me
        </h1>
        <p className='max-w-4xl leading-9 text-lg'>
          My name is Jinyoung Choi. I'm a passionate 3D modeller and developer
          currently based in Brisbane Australia. I've worked individually to
          create and develop games, prototypes and 3D environments and
          characters. I am constantly updating my skills and am eager to learn
          more to work toward success.
        </p>
        <p className='text-lg'>Attached is a copy of my complete resume.</p>
        <a href=''>
          <img src={pdf} alt='pdf' className='h-40' />
        </a>
      </div>
      <Footer />
    </>
  )
}
