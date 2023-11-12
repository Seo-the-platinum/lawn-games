import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='bg-slate-950 px-4'>
      <ul className='hidden gap-4 justify-end sm:flex text-2xl'>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about'>
            About
          </Link>
        </li>
        <li>
          <Link href='/gallery'>
            Gallery
          </Link>
        </li>
        <li>
          <Link href='/booking'>
            Booking
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav