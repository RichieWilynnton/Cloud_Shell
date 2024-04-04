import React from 'react'

interface CmdErrorProps {
  args: string[];
  message: string;
}

const CmdError = ({ args, message }: CmdErrorProps) => {
  return (
    <div className='text-xl text-red-600'>
      {message}
    </div>
  )
}

export default CmdError