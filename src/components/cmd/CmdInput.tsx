import React, { useRef } from 'react'
import { useAppContext } from './context/AppContext';

// Input for the command line
const CmdInput = ({onSubmit} : {onSubmit: (cmd:string) => void}) => {
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const appContext = useAppContext();
    const currentDir = appContext.fileSystemTree.getCurrentDirectory();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const value = inputRef.current?.value;
        onSubmit(value as string);
        inputRef.current.value = '';
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex '>
            <span className='text-green-400'>richie@cloud_terminal:</span> <span className='text-blue-500'>{currentDir}</span>
                <input type="text" ref={inputRef} className="text-yellow-300 text-xl bg-transparent w-full ml-2 outline-none" />
            </form>
        </div>
    )
}

export default CmdInput