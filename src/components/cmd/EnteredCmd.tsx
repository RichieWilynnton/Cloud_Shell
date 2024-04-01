import { CmdI } from '@/interfaces/CmdI'
import React from 'react'
import CmdTextDisplay from './CmdTextDisplay'
import CmdError from './cmdOutputs/CmdError'
import { CmdProps } from '@/interfaces/CmdPropsI'

// Displays history of entered commands
const EnteredCmd = ({ cmdHistory } : { cmdHistory: CmdI[] }) => {
    console.log(cmdHistory);
    return (
        <div>
                {cmdHistory.map(({ cmd, Component, props, time }, index) => (
                        <div key={index} className="text-gray-300 text-xl">
                            <CmdTextDisplay cmd={cmd} date={time} />
                            <Component {...props as CmdProps} />
                        </div>
                ))}
        </div>
    )
}

export default EnteredCmd