import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

interface CmdProps {
    args: string[];
}

const Ls = ({ args }: CmdProps) => {
    const appContext = useAppContext();
    const fileSystemTree = appContext.fileSystemTree;
    
    const [filesList, setFilesList] = useState<string[]>([]);

    useEffect(() => {
        setFilesList(fileSystemTree.getCurrentChildren().map((file) => file.name));
    }, []);

    return (
        <div>
            <div className="text-xl text-gray-400">
                {filesList.map((file, index) => (
                    <div key={index}>{file}</div>
                ))}
            </div>
        </div>
    );
};

export default Ls;
