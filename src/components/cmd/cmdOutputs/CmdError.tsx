import React from 'react'

interface CmdErrorProps {
  cmd: string;
  args: {
    message: string;
  };
}

const CmdError = ({ cmd, args }: CmdErrorProps) => {
  return (
    <div className='text-xl text-red-600'>
      {args.message}
    </div>
  )
}

export default CmdError