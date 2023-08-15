import React from 'react'
import { connect_001 } from '../assets'

export default function Connect_four() {
  return (
    <>
      <div className='flex flex-col gap-5 mx-32 sm:mx-20 xs:mx-10 2xs:mx-5'>
        <a href='https://connect-four-game-m1ctxyhbg-jinyoung5497.vercel.app/'>
          <img src={connect_001} alt='connect_001' className='cursor-pointer' />
        </a>
        <div className='flex self-center gap-10 3xs:gap-5'>
          <a
            href='https://connect-four-game-m1ctxyhbg-jinyoung5497.vercel.app/'
            className='h-12 bg-gradient-to-r from-teal-500 to-cyan-500  hover:from-violet-400 hover:to-cyan-400 rounded-lg p-5 flex items-center text-white justify-center font-medium border-[1px] mt-10 w-32 self-center'
          >
            Live Link
          </a>
          <a
            href='https://github.com/jinyoung5497/connect-four-game'
            className='h-12 bg-gradient-to-r from-teal-500 to-cyan-500  hover:from-violet-400 hover:to-cyan-400 rounded-lg p-5 flex items-center text-white justify-center font-medium border-[1px] mt-10 w-32 self-center'
          >
            View code
          </a>
        </div>
        <p className='font-bold text-lg'>Users should be able to:</p>
        <ul className='leading-8 list-disc 4xs:leading-7 4xs:text-md ml-5'>
          <li>View the game rules</li>
          <li>
            Play a game of Connect Four against another human player
            (alternating turns on the same computer)
          </li>
          <li>
            See hover and focus states for all interactive elements on the page
          </li>
          <li>See the discs animate into their position when a move is made</li>
        </ul>
        <p className='font-bold text-lg'>Built with</p>
        <ul className='leading-8 list-disc 4xs:leading-7 4xs:text-md ml-5'>
          <li>React</li>
          <li>Typscript</li>
          <li>React Redux</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </>
  )
}
