import { CmdI } from '@/interfaces/CmdI'
import React from 'react'
import CmdTextDisplay from './CmdTextDisplay'
import { CmdProps } from '@/interfaces/CmdPropsI'

// Displays history of entered commands
const EnteredCmd = ({ cmdHistory } : { cmdHistory: CmdI[] }) => {
    return (
        <div>
                {cmdHistory.map(({ cmd, Component, props, directory, time }, index) => (
                        <div key={index} className="text-gray-300 text-xl">
                            <CmdTextDisplay cmd={cmd} date={time} directory={directory}/>
                            <Component {...props as CmdProps} />
                        </div>
                ))}
        </div>
    )
}

export default EnteredCmd