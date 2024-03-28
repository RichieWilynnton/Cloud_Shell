import React from 'react'
import { VT323 } from 'next/font/google';

const vt323 = VT323({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font--vt323',
  });

const Header = () => {
  return (
    <div className={`${vt323.variable} text-2xl`}>Welcome</div>
  )
}

export default Header