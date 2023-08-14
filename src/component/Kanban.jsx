import React from 'react'
import { kanban_001 } from '../assets'

export default function Kanban() {
  return (
    <>
      <div className='flex flex-col gap-5 mx-32'>
        <a href='https://kanban-task-management-4jes1jbc9-jinyoung5497.vercel.app/'>
          <img src={kanban_001} alt='kanban_001' className='cursor-pointer' />
        </a>
        <div className='flex self-center gap-10'>
          <a
            href='https://kanban-task-management-4jes1jbc9-jinyoung5497.vercel.app/'
            className='h-12 bg-gradient-to-r from-teal-500 to-cyan-500  hover:from-violet-400 hover:to-cyan-400 rounded-lg p-5 flex items-center text-white px-12 font-medium border-[1px] mt-10 w-fit self-center'
          >
            Live Link
          </a>
          <a
            href='https://github.com/jinyoung5497/Kanban-Task-Management'
            className='h-12 bg-gradient-to-r from-teal-500 to-cyan-500  hover:from-violet-400 hover:to-cyan-400 rounded-lg p-5 flex items-center text-white px-12 font-medium border-[1px] mt-10 w-fit self-center'
          >
            View code
          </a>
        </div>
        <p className='font-bold text-lg'>Users should be able to:</p>
        <ul className='leading-8 list-disc'>
          <li>Create, read, update, and delete boards and tasks</li>
          <li>See hover states for all interactive elements on the page</li>
          <li>
            Receive form validations when trying to create/edit boards and tasks
          </li>
          <li>Mark subtasks as complete and move tasks between columns</li>
          <li>Hide/show the board sidebar</li>
          <li>Toggle the theme between light/dark modes</li>
          <li>Keep track of any changes, even after refreshing the browser</li>
          <li>This project is a full-stack application</li>
        </ul>
        <p className='font-bold text-lg'>Built with</p>
        <ul className='leading-8 list-disc'>
          <li>MERN Stack</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Express js</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </>
  )
}
