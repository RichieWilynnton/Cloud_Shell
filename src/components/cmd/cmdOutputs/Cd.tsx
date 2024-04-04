import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";

interface CmdProps {
    args: string[];
}

const Cd = ( { args } : CmdProps ) => {
    const appContext = useAppContext();
    const fileSystemTree = appContext.fileSystemTree;
    const dir = args[0];

    const execute: () => void = () => {
        fileSystemTree.setCurrentDirectory(dir);
    };

    useEffect(() => {
        execute();
    }, [])
    
    return <div></div>;
};

export default Cd;
