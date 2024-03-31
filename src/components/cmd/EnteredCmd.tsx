import { CmdI } from '@/interfaces/CmdI'
import React from 'react'
import CmdTextDisplay from './CmdTextDisplay'

// Displays history of entered commands
const EnteredCmd = ({ cmdHistory } : { cmdHistory: CmdI[] }) => {
    return (
        <div>
                {cmdHistory.map(({ cmd, component, time }, index) => (
                        <div key={index} className="text-gray-300 text-xl">
                            <CmdTextDisplay cmd={cmd} date={time} />
                        </div>
                ))}
        </div>
    )
}

export default EnteredCmd