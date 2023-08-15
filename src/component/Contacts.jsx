import React, { useState, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import emailjs from '@emailjs/browser'

export default function Contacts() {
  const form = useRef()
  const [messageSent, setMessageSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [emptyField, setEmptyField] = useState(false)

  const sendEmail = (e) => {
    if (name && email && subject && message) {
      setMessageSent(true)
      e.preventDefault()
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')

      emailjs
        .sendForm(
          'service_l2dgodp',
          'template_urx8k04',
          form.current,
          'tIj0zmqjyVWhJIwzR'
        )
        .then(
          (result) => {
            console.log(result.text)
            console.log('Message sent!')
          },
          (error) => {
            console.log(error.text)
          }
        )
    } else {
      setEmptyField(true)
      alert('Please ensure that all necessary fields are filled out.')
    }
  }

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center flex-col gap-12 mx-32 md:mx-20 sm:mx-10 sm:gap-8 3xs:gap-5'>
        <h1 className='text-[100px] lg:text-[80px] m:text-[70px] sm:text-[60px] xs:text-[50px] font-bold my-5 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center 4xs:text-[40px]'>
          Contact Me
        </h1>
        {emptyField ? (
          <p className='text-slate-600 text-center 4xs:text-md 5xs:text-sm'>
            Please ensure that all necessary fields are filled out.
          </p>
        ) : (
          <p className='text-slate-600 text-center 4xs:text-md 5xs:text-sm'>
            {messageSent
              ? 'Message sent successfully. Thank you!'
              : "I'm keen to hear from you! Feel free to contact me through this form."}
          </p>
        )}
        <div className='flex gap-1'>
          <p className='text-slate-600 text-center 4xs:text-md 5xs:text-sm'>
            Ulternatively you can contact me via email jinyoung5497@gmail.com or
            <a
              href='https://www.linkedin.com/in/jinyoung-choi-006997196/'
              className='text-blue-800 ml-1'
            >
              LinkedIn
            </a>
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col gap-5 w-full px-60 lg:px-40 ml:px-32 md:px-20 xs:px-10 2xs:px-5 3xs:px-0'
        >
          <input
            type='text'
            name='user_name'
            placeholder='Name'
            onChange={(event) => setName(event.target.value)}
            className='border-[1px] border-slate-600 p-3 rounded-lg'
          />
          <input
            type='email'
            name='user_email'
            placeholder='Email'
            onChange={(event) => setEmail(event.target.value)}
            className='border-[1px] border-slate-600 p-3 rounded-lg'
          />
          <input
            type='text'
            name='user_subject'
            placeholder='Subject'
            onChange={(event) => setSubject(event.target.value)}
            className='border-[1px] border-slate-600 p-3 rounded-lg'
          />
          <textarea
            name='message'
            placeholder='Type your message here...'
            onChange={(event) => setMessage(event.target.value)}
            className='border-[1px] border-slate-600 p-3 h-60 rounded-lg'
          />
          <input
            type='submit'
            value='Send'
            className='h-12 w-fit bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg flex items-center text-white px-12 font-medium border-[1px] self-center hover:from-violet-400 hover:to-fuchsia-400'
          />
        </form>
      </div>
      <Footer />
    </>
  )
}
