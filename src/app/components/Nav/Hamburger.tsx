'use client'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link'

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(curr => !curr)
  }
  return (
    <div className={`${isOpen ? '-translate-x-1/4' : 'translate-x-0'} relative flex sm:hidden left-full transition-transform ease-in-out duration-500`}>
      <GiHamburgerMenu className='text-4xl fill-slate-50 absolute right-full' onClick={toggle} />
      <div className="flex flex-col min-h-screen pl-2">
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/gallery'>Gallery</Link>
          </li>
          <li>
            <Link href='/booking'>Booking</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hamburger