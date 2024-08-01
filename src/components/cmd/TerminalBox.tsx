import React, { useEffect, useRef, useState } from "react";
import { CmdI } from "../../interfaces/CmdI";
import Header from "./Header";
import EnteredCmd from "./EnteredCmd";
import CmdInput from "./CmdInput";
import Navbar from "./Navbar";
import processCMD from "@/utils/processCmd";
import { useAppContext } from "./context/AppContext";
import CmdError from "./cmdOutputs/CmdError";
import TextEditor from "./TextEditor";
import Vi from "./cmdOutputs/Vi";

// Main terminal box
const TerminalBox = () => {
    const [cmdState, setCmdState] = useState<CmdI[]>([]);
    const [tempCmd, setTempCmd] = useState<CmdI | null>(null);
    const [textEditingMode, setTextEditingMode] = useState<boolean>(false);
    const [textEditingContent, setTextEditingContent] = useState<string>("");
    const [weather, setWeather] = useState<any>(null); // Move weather state here
    const appContext = useAppContext(); // React Rule of Hooks - hooks must be called at the top level of components, cannot functions
    const currentDirectory = appContext.fileSystemTree.getCurrentDirectory();
    const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>; // For scrolling to bottom

    useEffect(() => {
        if (dummyRef.current) dummyRef.current.scrollIntoView({ behavior: "auto" });
    }, [cmdState, textEditingMode]);

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

        const cmdInfo = { ...processCMD(cmd, appContext) };

        // Content needs to be updated later
        if (cmdInfo.Component == Vi) {
            setTextEditingMode(true);
            setTempCmd(cmdInfo);
            setTextEditingContent(cmdInfo.props?.content!);
        }
        else {
            setCmdState((currCmd) => [...currCmd, cmdInfo]);
        }
    };

    const onTextEditorExit = (updatedContent : string) => {
        setTextEditingMode(false);
        if (tempCmd) {
            const updatedCmd : CmdI = { ...tempCmd, props: { args : tempCmd.props?.args!, content: updatedContent } };
            setCmdState((currCmd) => [...currCmd, updatedCmd]);
            setTempCmd(null);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="box mx-auto h-55vh max-w-4xl overflow-y-auto rounded-b-md border-x-2 border-b-2 border-slate-800 bg-black bg-opacity-75 text-xl text-gray-300">
                {textEditingMode ? (
                    <div className="p-2">
                        <TextEditor content={textEditingContent} handleTextEditorExit={onTextEditorExit}></TextEditor>
                    </div>
                ) : (
                    <div className="p-2">
                        <Header weather={weather} /> 
                        <EnteredCmd cmdHistory={cmdState} />
                        <CmdInput onSubmit={handleSubmit} currentDir={currentDirectory}/>
                        <div ref={dummyRef}></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TerminalBox;
