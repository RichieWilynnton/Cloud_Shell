import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";

interface CmdProps {
    args: string[];
}

const Cd = ( { args } : CmdProps ) => {
    const {fileSystemTree, setCurrentDirectory} = useAppContext();
    const dir = args[0];

    const execute: () => void = () => {
        fileSystemTree.setCurrentDirectory(dir);
        setCurrentDirectory(fileSystemTree.getCurrentDirectory());
    };

    useEffect(() => {
        execute();
    }, [])
    
    return <div></div>;
};

export default Cd;
