import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";

interface CmdProps {
    args: string[];
}
const Rmdir = ({ args }: CmdProps) => {
    const { fileSystemTree } = useAppContext();
    const dirName = args[0];
    const execute = () => {
        fileSystemTree.removeDirectory(dirName);
    };
    useEffect(() => {
        execute();
    }, []);

    return <div></div>;
};

export default Rmdir;
