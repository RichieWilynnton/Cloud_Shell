import React from 'react'

interface CmdProps {
    cmd: string;
    filesList: String[];
}

const Ls = ( {cmd, filesList} : CmdProps) => {
  return (
    <div>
        <div className='text-xl text-gray-400'>
            {filesList.map((file, index) => (
            <div key={index}>{file}</div>
            ))}
        </div>
    </div>
  )
}

export default Ls