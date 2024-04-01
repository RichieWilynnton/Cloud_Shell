import React from 'react'

const CmdError = ( {cmd, args} :  {cmd : string, args: any[]} ) => {
  return (
    <div className='text-xl text-red-600'>
        Error
    </div>
  )
}

export default CmdError