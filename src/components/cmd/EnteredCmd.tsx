import { CmdI } from '@/interfaces/CmdI'
import React from 'react'

// Displays history of entered commands
const EnteredCmd = ({ cmdHistory } : { cmdHistory: CmdI[] }) => {
    return (
        <div>
                {cmdHistory.map(({ cmd, component, time }, index) => (
                        <div key={index} className="text-gray-300 text-xl">
                        {cmd}
                        {component}
                        </div>
                ))}
        </div>
    )
}

export default EnteredCmd