import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { SystemObject } from "@/enums/SystemObject";
import { TreeNode } from "@/utils/TreeNode";

interface CmdProps {
    args: string[];
}

const Ls = ({ args }: CmdProps) => {
    const appContext = useAppContext();
    const fileSystemTree = appContext.fileSystemTree;
    const fileThemes = {
        [SystemObject.File]: "🐍",
        [SystemObject.Directory]: "📁",
    }
    
    const [filesList, setFilesList] = useState<TreeNode[]>([]);

    useEffect(() => {
        console.log("triggered")
        const currentChildren = fileSystemTree.getCurrentChildren();
        setFilesList([...currentChildren]);
    }, []);

    return (
        <div>
            <div className="text-xl text-gray-400">
                {filesList.map((file, index) => (
                    <div key={index}>{fileThemes[file.type]} {file.name}</div>
                ))}
            </div>
        </div>
    );
};

export default Ls;
