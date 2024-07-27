import React, { useEffect, useRef, useState } from "react";
import { CmdI } from "../../interfaces/CmdI";
import Header from "./Header";
import EnteredCmd from "./EnteredCmd";
import CmdInput from "./CmdInput";
import Navbar from "./Navbar";
import processCMD from "@/utils/processCmd";
import { useAppContext } from "./context/AppContext";
import CmdError from "./cmdOutputs/CmdError";

// Main terminal box
const TerminalBox = () => {
    const [cmdState, setCmdState] = useState<CmdI[]>([]);
    const [textEditingMode, setTextEditingMode] = useState<boolean>(false);
    const [weather, setWeather] = useState<any>(null); // Move weather state here
    const appContext = useAppContext(); // React Rule of Hooks - hooks must be called at the top level of components, cannot functions
    const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>; // For scrolling to bottom

    useEffect(() => {
        dummyRef.current.scrollIntoView({ behavior: "auto" });
    }, [cmdState]);

    useEffect(() => {
        const fetchWeatherData = async (): Promise<void> => {
            try {
                const response = await fetch("/api/weather");
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchWeatherData();
    }, []); // Fetch weather data only once

    const handleSubmit = (cmd: string) => {
        // Nothing is entered
        if (cmd === "") return;

        if (cmd === "clear") {
            setCmdState([]);
            return;
        }

        const cmdInfo = { ...processCMD(cmd, appContext), time: new Date() };
        // Handle command
        setCmdState((currCmd) => [...currCmd, cmdInfo]);

        if (cmdInfo.Component == CmdError) {
        }
    };

    return (
        <div>
            <button className="text-white" onClick={() => {setTextEditingMode(!textEditingMode)}}>fdasfadf</button>
            <Navbar />
            <div className="box mx-auto h-55vh max-w-4xl overflow-y-auto rounded-b-md border-x-2 border-b-2 border-slate-800 bg-black bg-opacity-75 text-xl text-gray-300">
                {textEditingMode ? (
                    <div>
                        text-editing
                    </div>
                ) : (
                    <div className="p-2">
                        <Header weather={weather} /> 
                        <EnteredCmd cmdHistory={cmdState} />
                        <CmdInput onSubmit={handleSubmit} />
                        <div ref={dummyRef}></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TerminalBox;
