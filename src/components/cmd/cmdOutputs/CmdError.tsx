import React from 'react'

interface CmdErrorProps {
  cmd: string;
  message: string;
}

const CmdError = ({ cmd, message }: CmdErrorProps) => {
  return (
    <div className='text-xl text-red-600'>
      {message}
    </div>
  )
}

export default CmdError