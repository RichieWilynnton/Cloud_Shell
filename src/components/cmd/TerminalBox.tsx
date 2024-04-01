import React, { useState } from 'react'
import { CmdI } from '../../interfaces/CmdI'
import Header from './Header';
import EnteredCmd from './EnteredCmd';
import CmdInput from './CmdInput';
import Navbar from './Navbar';
import processCMD from '@/utils/processCmd';

// Main terminal box 
const TerminalBox = () => {
    const [cmdState, setCmdState] = useState<CmdI[]>([
        
    ]);

    const handleSubmit = (cmd: string) => {
        setCmdState((currCmd) => [
            ...currCmd,
            // { cmd, Component: 'CmdTextDisplay', props: null, time: new Date() }
            {...processCMD(cmd), time: new Date()}
            // render function + date
        ]);
    }

    return (
        <div>
            <div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl overflow-y-auto h-55vh bg-black bg-opacity-75 box">
                <Navbar />
                <div className='p-2'>
                <Header />
                <EnteredCmd cmdHistory={cmdState} />
                <CmdInput onSubmit={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default TerminalBox