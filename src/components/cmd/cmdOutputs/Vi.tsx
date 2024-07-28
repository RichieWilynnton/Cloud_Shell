import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";

interface CmdProps {
    args: string[];
    content: string;
}
const Vi = ({ args, content }: CmdProps) => {
    const { fileSystemTree } = useAppContext();
    const fileName = args[0];
    const execute = () => {
        fileSystemTree.editFile(fileName, content);
        
    };
    useEffect(() => {
        execute();
    }, []);

    return <div></div>;
};

export default Vi;
