import React, { useEffect, useRef, useState } from "react";
import { CmdI } from "../../interfaces/CmdI";
import Header from "./Header";
import EnteredCmd from "./EnteredCmd";
import CmdInput from "./CmdInput";
import Navbar from "./Navbar";
import processCMD from "@/utils/processCmd";
import { useAppContext } from "./context/AppContext";

// Main terminal box
const TerminalBox = () => {
    const [cmdState, setCmdState] = useState<CmdI[]>([]);
    const appContext = useAppContext(); // React Rule of Hooks - hooks must be called at the top level of components
    const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement> // For scrolling to bottom

    useEffect(() => {
		dummyRef.current.scrollIntoView({ behavior: "auto" });
	}, [cmdState]);

    const handleSubmit = (cmd: string) => {
        // Nothing is entered
        if (cmd === "") return;

        // Clear (Only exception of command implementation)
        if (cmd === "clear") {
            setCmdState([]);
            return;
        }

        // Handle command
        setCmdState((currCmd) => [
            ...currCmd,
            { ...processCMD(cmd, appContext), time: new Date() },
        ]);
    };

    return (
        <div>
            <Navbar />
            <div className="box mx-auto h-55vh max-w-4xl overflow-y-auto rounded-b-md border-x-2 border-b-2 border-slate-800 bg-black bg-opacity-75 text-xl text-gray-300">
                <div className="p-2">
                    <Header />
                    <EnteredCmd cmdHistory={cmdState} />
                    <CmdInput onSubmit={handleSubmit} />
                    <div ref={dummyRef}></div>
                </div>
            </div>
        </div>
    );
};

export default TerminalBox;
