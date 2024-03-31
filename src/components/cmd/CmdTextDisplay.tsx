import React from 'react'

// Display the currect directory + command + date
const CmdTextDisplay = ({cmd, date} : {cmd: string, date: Date}) => {
  return (
    <div className='flex justify-between items-center '>
        <div className='text-gray-300 text-xl'> {`<C:\\users\\richie> ${cmd}`}</div>
        <div className='text-gray-300 text-xl '>{date.toLocaleDateString()}</div>
    </div>
  )
}

export default CmdTextDisplay