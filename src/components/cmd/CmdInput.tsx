import React, { useEffect, useRef, useState } from "react";

// Input for the command line

const CmdInput = ({ onSubmit, currentDir }: { onSubmit: (cmd: string) => void, currentDir: string }) => {
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const value = inputRef.current?.value;
        onSubmit(value as string);
        inputRef.current.value = "";
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex">
                <span className="text-green-400">richie@cloud_terminal:</span>{" "}
                <span className="text-blue-500">{currentDir}</span>
                <span>$</span>
                <input
                    type="text"
                    ref={inputRef}
                    className="ml-2 w-full bg-transparent text-xl text-yellow-300 outline-none"
                />
            </form>
        </div>
    );
};

export default CmdInput;
