import React, { useState } from 'react'
import { CmdI } from '../../interfaces/CmdI'
import Header from './Header';
import EnteredCmd from './EnteredCmd';

// Main terminal box 
const TerminalBox = () => {
    const [cmdState, setCmdState] = useState<CmdI[]>([
        { cmd: 'ls', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'cd ..', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'ls', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'cd ..', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'ls', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'cd ..', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'ls', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'cd ..', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'ls', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'cd ..', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'ls', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'cd ..', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'ls', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'cd ..', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'ls', component: 'CmdTextDisplay', time: new Date() },
        // { cmd: 'cd ..', component: 'CmdTextDisplay', time: new Date() },
    ]);

    return (
        <div>
            <div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-55vh bg-black bg-opacity-75 box">
                <Header />
                <EnteredCmd cmdHistory={cmdState} />

            </div>
        </div>
    )
}

export default TerminalBox