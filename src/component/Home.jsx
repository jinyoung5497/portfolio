import React from 'react'
import Navbar from './Navbar'
import {
  csharp,
  github,
  javascript,
  marmoset,
  marvelous_designer,
  maya,
  photoshop,
  premierepro,
  react,
  redux,
  substancepainter,
  tailwind,
  typescript,
  unity,
  unreal,
  zbrush,
} from '../assets'
import { FeaturedSkill, Footer } from '../component'

/**
 * Animations
 * mobile/tablet
 *
 * Logo main
 * About pdf link
 * Resume pdf
 * Linkedin
 *
 *
 * kor version
 */

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center flex-col gap-12 mx-32'>
        <h1 className='text-[100px] font-bold my-5 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text'>
          Jinyoung Choi
        </h1>
        <p className='text-xl text-slate-600 text-center max-w-7xl'>
          Welcome to my portfolio! I specialise in the art of 3D modeling and
          scripting. Here you will find a showcase of my polished projects and
          prototypes!
        </p>
        <div className='flex gap-10 mb-10'>
          <a
            href='https://jin5497.artstation.com/'
            className='h-12 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg p-5 flex items-center hover:text-white px-12 font-medium border-[1px] border-fuchsia-500'
          >
            ArtStation
          </a>
          <a
            href='https://github.com/jinyoung5497'
            className='h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg p-5 flex items-center hover:text-white px-12 font-medium border-[1px] border-blue-500'
          >
            Github
          </a>
        </div>
        <div className='flex flex-col items-center gap-10 w-full mb-10'>
          <h1 className='font-medium text-md text-slate-600 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text mb-5'>
            Elevating Ideas, Mastering Skills, Inspiring Innovation
          </h1>
          <div className='flex gap-10 items-center justify-center flex-wrap max-w-5xl'>
            <img src={maya} alt='maya' className='h-20' />
            <img src={zbrush} alt='zbrush' className='h-20' />
            <img
              src={substancepainter}
              alt='substancepainter'
              className='h-20'
            />
            <img src={marmoset} alt='marmoset' className='h-20' />
            <img src={photoshop} alt='photoshop' className='h-20' />
            <img src={premierepro} alt='premierepro' className='h-20' />
            <img src={javascript} alt='javascript' className='h-20' />
            <img src={typescript} alt='typescript' className='h-20' />
            <img src={react} alt='react' className='h-20' />
            <img src={redux} alt='redux' className='h-20' />
            <img src={csharp} alt='csharp' className='h-20' />
            <img src={tailwind} alt='tailwind' className='h-20' />
            <img src={github} alt='github' className='h-20' />
            <img
              src={marvelous_designer}
              alt='marvelous_designer'
              className='h-20'
            />
            <img src={unity} alt='unity' className='h-20' />
            <img src={unreal} alt='unreal' className='h-20' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-10 w-full mb-10'>
          <FeaturedSkill />
        </div>
      </div>
      <Footer />
    </>
  )
}
