import React from 'react'
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font--pacifico',
  });

const Header = () => {
  return (
    <div className={pacifico.className}>
      <span className='text-4xl'>Welcome</span>
    </div>
  )
}

export default Header