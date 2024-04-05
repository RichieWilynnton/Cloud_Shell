import React, { use, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

interface CmdProps {
    args: string[];
}
const Mkdir = ({ args }: CmdProps) => {
    const { fileSystemTree } = useAppContext();
    const newDir = args[0];
    const execute = () => {
        fileSystemTree.createNewDirectory(newDir);
    };
    useEffect(() => {
        execute();
    }, []);

    return <div></div>;
};

export default Mkdir;
