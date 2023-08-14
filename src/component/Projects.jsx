import React from 'react'
import { Navbar, Footer, Project_detail } from '../component'
import {
  assassin_001,
  general_001,
  grenade_001,
  harbour_city_001,
  knight_001,
  lost_temple_001,
  man_in_suit_001,
  old_wagon_001,
  scifi_girl_001,
  uss_europa_001,
  xwave_004,
  kanban_001,
  connect_001,
  multi_step_001,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import {
  hoverFalse,
  projectIndex,
  title,
  modelling,
  frontend,
} from '../slices/pageSlice'

export default function Projects() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)

  const openProject = (index, name) => {
    dispatch(hoverFalse())
    dispatch(projectIndex(index))
    dispatch(title(name))
    window.scrollTo({ top: 0 })
  }

  const setModelling = () => {
    dispatch(modelling())
  }
  const setFrontend = () => {
    dispatch(frontend())
  }

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center flex-col gap-12 mx-32'>
        {page.hover && (
          <>
            <h1 className='text-[100px] font-bold my-5 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text'>
              Projects
            </h1>
            <p className='text-xl text-slate-600 text-center max-w-7xl mb-5'>
              Explore the intersection of design, functionality, and imagination
              as you navigate through this showcase of my work. Each project
              stands as a polished gem, reflecting the commitment to excellence
              and the relentless pursuit of pushing boundaries.
            </p>
            <div className='flex gap-10 mb-10'>
              <button
                className='h-12 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 rounded-lg p-5 flex items-center hover:text-white px-12 font-medium border-[1px] border-fuchsia-500'
                onClick={setModelling}
              >
                3D Modelling
              </button>
              <button
                className='h-12 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-lg p-5 flex items-center hover:text-white px-12 font-medium border-[1px] border-blue-500'
                onClick={setFrontend}
              >
                Frontend
              </button>
            </div>
          </>
        )}
        {page.hover
          ? page.modelling && (
              <div className='grid grid-cols-3 gap-10 mx-32'>
                <div
                  onClick={() => openProject(0, 'General')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={general_001}
                    alt='general_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold'>
                    General
                  </div>
                </div>

                <div
                  onClick={() => openProject(1, 'X-wave')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={xwave_004}
                    alt='xwave_004'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold z-1'>
                    X-wave
                  </div>
                </div>

                <div
                  onClick={() => openProject(2, 'USS Europa')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={uss_europa_001}
                    alt='uss_europa_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold z-1'>
                    USS Europa
                  </div>
                </div>

                <div
                  onClick={() => openProject(3, 'Old Wagon')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={old_wagon_001}
                    alt='old_wagon_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold z-1'>
                    Old Wagon
                  </div>
                </div>

                <div
                  onClick={() => openProject(4, 'Lost Temple')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={lost_temple_001}
                    alt='lost_temple_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold z-1'>
                    Lost Temple
                  </div>
                </div>

                <div
                  onClick={() => openProject(5, 'Harbour City')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={harbour_city_001}
                    alt='harbour_city_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold z-1'>
                    Harbour City
                  </div>
                </div>

                <div
                  onClick={() => openProject(6, 'Assassin')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={assassin_001}
                    alt='assassin_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold z-1'>
                    Assassin
                  </div>
                </div>

                <div
                  onClick={() => openProject(7, 'Scifi Girl')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={scifi_girl_001}
                    alt='scifi_girl_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold z-1'>
                    Scifi Girl
                  </div>
                </div>

                <div
                  onClick={() => openProject(8, 'Knight')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={knight_001}
                    alt='knight_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold z-1'>
                    Knight
                  </div>
                </div>

                <div
                  onClick={() => openProject(9, 'Man In Suit')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={man_in_suit_001}
                    alt='man_in_suit_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold z-1'>
                    Man In Suit
                  </div>
                </div>

                <div
                  onClick={() => openProject(10, 'Grenade')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={grenade_001}
                    alt='grenade_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold z-1'>
                    Grenade
                  </div>
                </div>
              </div>
            )
          : page.modelling && <Project_detail />}
        {page.hover
          ? page.frontend && (
              <div className='grid grid-cols-3 gap-10 mx-32'>
                <div
                  onClick={() => openProject(11, 'Kanban Task Management App')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={kanban_001}
                    alt='kanban_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold'>
                    Kanban Task Management App
                  </div>
                </div>

                <div
                  onClick={() => openProject(12, 'Connect Four Game')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={connect_001}
                    alt='connect_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold'>
                    Connect Four Game
                  </div>
                </div>

                <div
                  onClick={() => openProject(13, 'Multi Step Form')}
                  className='rounded-xl flex flex-col items-center justify-center cursor-pointer'
                >
                  <img
                    src={multi_step_001}
                    alt='multi_step_001'
                    className='drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] rounded-xl h-4/5'
                  />
                  <div className='h-1/5 flex items-center justify-center text-lg font-semibold'>
                    Multi Step Form
                  </div>
                </div>
              </div>
            )
          : page.frontend && <Project_detail />}
      </div>
      <Footer />
    </>
  )
}
