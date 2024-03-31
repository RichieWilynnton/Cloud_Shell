import React, { useRef } from 'react'

// Input for the command line
const CmdInput = ({onSubmit} : {onSubmit: (cmd:string) => void}) => {
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const value = inputRef.current?.value;
        onSubmit(value as string);
        inputRef.current.value = '';
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex'>
                <span className="text-gray-300 text-xl">{"<C:\\users\\richie>"} </span>
                <input type="text" ref={inputRef} className="text-yellow-300 text-xl bg-transparent w-full ml-2 outline-none" />
            </form>
        </div>
    )
}

export default CmdInput