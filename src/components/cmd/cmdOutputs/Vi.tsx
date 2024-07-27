import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";

interface CmdProps {
    args: string[];
}
const Vi = ({ args }: CmdProps) => {
    const { fileSystemTree } = useAppContext();
    const fileName = args[0];
    const execute = () => {
        fileSystemTree.removeDirectory(fileName);
    };
    useEffect(() => {
        execute();
    }, []);

    return <div></div>;
};

export default Vi;
