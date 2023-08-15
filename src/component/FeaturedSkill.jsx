import React from 'react'
import {
  scifi_girl_008,
  scifi_girl_012,
  knight_005,
  general_009,
  general_017,
  lost_temple_015,
  lost_temple_008,
  harbour_city_006,
  harbour_city_005,
  xwave_004,
  xwave_013,
} from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { hoverFalse, projectIndex, title } from '../slices/pageSlice'
import { useNavigate } from 'react-router-dom'

export default function FeaturedSkill() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.value)
  const navigate = useNavigate()

  const openProject = (index, name) => {
    dispatch(hoverFalse())
    dispatch(projectIndex(index))
    dispatch(title(name))
    window.scrollTo({ top: 0 })
    navigate('/projects')
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center mx-40 xl:mx-32 ml:mx-20 md:mx-10 m:mx-5 sm:mx-0'>
        <div className='grid grid-cols-2 items-center justify-center gap-20 lg:flex lg:flex-col 2xs:gap-10'>
          {/* concept matching */}
          <div className='col-span-2 flex flex-col items-center justify-center'>
            <div className='h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500  font-semibold flex items-center justify-center text-white  justify-self-center my-10'>
              1
            </div>
            <p className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-fuchsia-500 text-transparent bg-clip-text text-center'>
              Concept matching
            </p>
          </div>
          <div
            className='flex flex-col gap-10 items-center justify-center cursor-pointer 2xs:gap-4'
            onClick={() => openProject(1, 'X-wave')}
          >
            <img
              src={xwave_004}
              alt='xwave_004'
              className='rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-4/5 3xs:w-full'
            />
            <img
              src={xwave_013}
              alt='xwave_013'
              className='rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-4/5 3xs:w-full'
            />
          </div>
          <div
            className='gap-5 flex flex-col cursor-pointer'
            onClick={() => openProject(1, 'X-wave')}
          >
            <h1 className='text-3xl font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-fuchsia-500 hover:text-transparent hover:bg-clip-text 3xs:text-xl'>
              Matching concept art to 3D Model Creation
            </h1>
            <p className='text-slate-600 leading-8 4xs:leading-6'>
              Concept matching in 3D modeling is an art form in itself, where
              creators harness their skillsets to meticulously bridge the gap
              between two-dimensional visions and three-dimensional marvels,
              resulting in a seamless fusion of artistry and technical prowess.
            </p>
          </div>
          {/* custom textures */}
          <div className='col-span-2 flex flex-col items-center justify-center'>
            <div className='h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500  font-semibold flex items-center justify-center text-white  justify-self-center my-10'>
              2
            </div>
            <p className='text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-center'>
              Custom textures
            </p>
          </div>
          <div
            className='gap-5 flex flex-col text-right cursor-pointer'
            onClick={() => openProject(4, 'Lost temple')}
          >
            <h1 className='text-3xl font-bold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text lg:text-left 3xs:text-xl'>
              The Art of Custom Textures
            </h1>
            <p className='text-slate-600 leading-8 lg:text-left 4xs:leading-6'>
              Custom textures play a pivotal role in evoking emotions and
              immersing the audience in a virtual world. Whether it's the
              weathered wood of an ancient structure or the glistening sheen of
              a futuristic spacecraft, custom textures elevate digital art to a
              new level of realism and artistic expression. Through the skillful
              application of textures, artists breathe life into their
              creations, turning mere digital surfaces into tangible, sensory
              experiences.
            </p>
          </div>
          <div
            className='flex flex-col gap-10 items-center justify-center cursor-pointer  2xs:gap-4'
            onClick={() => openProject(4, 'Lost temple')}
          >
            <img
              src={lost_temple_015}
              alt='lost_temple_015'
              className='rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-4/5 3xs:w-full'
            />
            <img
              src={harbour_city_006}
              alt='harbour_city_006'
              className='rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-4/5 3xs:w-full'
            />
          </div>
          {/* sophisticated pattern */}
          <div className='col-span-2 flex flex-col items-center justify-center'>
            <div className='h-10 w-10 rounded-full bg-gradient-to-r from-violet-500 to-pink-500  font-semibold flex items-center justify-center text-white  justify-self-center my-10'>
              3
            </div>
            <p className='text-3xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text text-center'>
              Sophisticated 3D pattern
            </p>
          </div>
          <img
            src={knight_005}
            alt='knight_005'
            className='rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] cursor-pointer'
            onClick={() => openProject(8, 'Knight')}
          />
          <div
            className='gap-5 flex flex-col cursor-pointer'
            onClick={() => openProject(8, 'Knight')}
          >
            <h1 className='text-3xl font-bold hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text 3xs:text-xl'>
              Elevating Aesthetics: Sophisticated 3D Patterns
            </h1>
            <p className='text-slate-600 leading-8 4xs:leading-6'>
              In the realm of 3D modeling, the creation of sophisticated
              patterns is a meticulous process that requires a blend of
              technical expertise and creative finesse. These patterns transcend
              mere repetition, encompassing intricate designs that seamlessly
              integrate into the 3D model's form, texture, and structure.
            </p>
          </div>
          {/* Clean Topology and UV mapping */}
          <div
            className='col-span-2 flex flex-col items-center justify-center cursor-pointer'
            onClick={() => openProject(8, 'Knight')}
          >
            <div className='h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400  font-semibold flex items-center justify-center text-white  justify-self-center my-10'>
              4
            </div>
            <p className='text-3xl font-bold bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text text-center'>
              Clean Topology and UV mapping
            </p>
          </div>
          <div
            className='gap-5 flex flex-col text-right cursor-pointer'
            onClick={() => openProject(0, 'General')}
          >
            <h1 className='text-3xl font-bold hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-400 hover:text-transparent hover:bg-clip-text lg:text-left 3xs:text-xl'>
              The Art of Topology and UV Mapping
            </h1>
            <p className='text-slate-600 leading-8 lg:text-left 4xs:leading-6'>
              Precision reigns with clean topology, ensuring smooth animations
              and efficient rendering. Seamlessly mapped UVs bring textures to
              life, enhancing realism.
            </p>
          </div>
          <div className='flex flex-col gap-10 items-center justify-center cursor-pointer  2xs:gap-4'>
            <img
              src={scifi_girl_012}
              alt='scifi_girl_012'
              className='rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-4/5 3xs:w-full'
              onClick={() => openProject(7, 'Scifi girl')}
            />
            <img
              src={general_017}
              alt='general_017'
              className='rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-4/5 3xs:w-full'
              onClick={() => openProject(0, 'General')}
            />
          </div>
          {/* Zwrap face skin wrapping */}
          <div className='col-span-2 flex flex-col items-center justify-center'>
            <div className='h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-lime-600  font-semibold flex items-center justify-center text-white  justify-self-center my-10'>
              5
            </div>
            <p className='text-3xl font-bold bg-gradient-to-r from-green-500 to-lime-600 text-transparent bg-clip-text text-center'>
              Zwrap face skin wrapping
            </p>
          </div>
          <img
            src={scifi_girl_008}
            alt='scifi_girl_008'
            className='rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] cursor-pointer'
            onClick={() => openProject(7, 'Scifi girl')}
          />
          <div
            className='gap-5 flex flex-col cursor-pointer'
            onClick={() => openProject(7, 'Scifi girl')}
          >
            <h1 className='text-3xl font-bold hover:bg-gradient-to-r hover:from-green-500 hover:to-lime-600 hover:text-transparent hover:bg-clip-text 3xs:text-xl'>
              Sculpting Realism: ZWrap Face Skin Wrapping in Zbrush
            </h1>
            <p className='text-slate-600 leading-8 4xs:leading-6'>
              Discover the artistry of ZWrap face skin wrapping, a technique
              that seamlessly molds digital avatar's skin onto 3D models. This
              process brings characters to life, capturing intricate facial
              details and expressions with unparalleled realism.
            </p>
          </div>
          {/* modular workflow */}
          <div className='col-span-2 flex flex-col items-center justify-center'>
            <div className='h-10 w-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500  font-semibold flex items-center justify-center text-white  justify-self-center my-10'>
              6
            </div>
            <p className='text-3xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 text-transparent bg-clip-text text-center'>
              Modular workflow
            </p>
          </div>
          <div
            className='gap-5 flex flex-col text-right cursor-pointer'
            onClick={() => openProject(4, 'Lost temple')}
          >
            <h1 className='text-3xl font-bold hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:text-transparent hover:bg-clip-text lg:text-left text-center 3xs:text-xl'>
              The Power of a Modular Workflow
            </h1>
            <p className='text-slate-600 leading-8 lg:text-left 4xs:leading-6'>
              Explore the efficiency and innovation of a modular workflow, where
              complex projects are deconstructed into manageable modules. This
              method streamlines development, encourages reusability, and
              fosters creativity by allowing focused attention on each element
              while seamlessly integrating them into a cohesive masterpiece.
            </p>
          </div>
          <div
            className='flex flex-col gap-10 items-center justify-center cursor-pointer 2xs:gap-4'
            onClick={() => openProject(4, 'Lost temple')}
          >
            <img
              src={lost_temple_008}
              alt='lost_temple_008'
              className='rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-4/5 3xs:w-full'
            />
            <img
              src={harbour_city_005}
              alt='harbour_city_005'
              className='rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-4/5 3xs:w-full'
            />
          </div>
        </div>
      </div>
    </>
  )
}
