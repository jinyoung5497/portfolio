import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { pdf, jinyoung } from '../assets'

export default function About() {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center flex-col gap-12 mx-32 2xs:mx-20 3xs:mx-10 3xs:gap-8'>
        <h1 className='text-[100px] lg:text-[80px] m:text-[70px] xs:text-[55px] 2xs:text-[40px] 4xs:text-[35px] font-bold my-5 bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text text-center 2xs:my-0'>
          About Me
        </h1>
        <img
          src={jinyoung}
          alt='jinyoung'
          className='rounded-full border-2 border-cyan-900 shadow-[0_35px_35px_rgba(0,0,0,0.25)] 2xs:h-64'
        />
        <p className='max-w-4xl leading-9 text-lg text-slate-800 2xs:text-md 2xs:leading-7 3xs:text-sm'>
          My name is Jinyoung Choi. I'm a passionate 3D modeller and developer
          currently based in Brisbane Australia. I've worked individually to
          create and develop games, prototypes and 3D environments and
          characters. I am constantly updating my skills and am eager to learn
          more to work toward success.
        </p>
        <p className='text-lg text-slate-800 2xs:text-md 3xs:text-sm'>
          Attached is a copy of my complete resume.
        </p>
        <a
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1Z_2sjPXG1W8mUw4rCEs3I8MvnZQVsDmc/view?usp=sharing'
            )
          }
        >
          <img src={pdf} alt='pdf' className='h-40 2xs:h-28' />
        </a>
      </div>
      <Footer />
    </>
  )
}
