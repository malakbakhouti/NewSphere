import Link from 'next/link'
import {FC} from 'react'

const Navbar:FC = () => {
  return (
    <nav className=''>
      <ul className='py-2 border-t border-gray-300'>
        <li className='space-x-6 text-xs'>
          <Link href="/world">World</Link>
          <Link href="/business">Business</Link>
          <Link href="/science">Science</Link>
          <Link href="/health">Health</Link>
          <Link href="/sports">Sports</Link>
          <Link href="/books">Books</Link>
          <Link href="lifestyle">Lifestyle</Link>
          <Link href="/food">Food</Link>
          <Link href="/travel">Travel</Link>
          <Link href="bitcoin">Bitcoin</Link>
          <Link href="share">Share</Link>
          <Link href="/e-sport">E-Sport</Link>
        </li>
      </ul>
      <div className='w-full h-[1px] bg-black mb-1' />
      <div className='w-full h-[1px] bg-black' />
    </nav>
  )
}

export default Navbar