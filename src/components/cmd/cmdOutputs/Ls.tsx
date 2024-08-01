import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { SystemObject } from "@/enums/SystemObject";
import { TreeNode } from "@/utils/TreeNode";

interface CmdProps {
    args: string[];
    objects: TreeNode[];
}

const Ls = ({ args, objects }: CmdProps) => {
    const fileThemes = {
        [SystemObject.File]: "🐍",
        [SystemObject.Directory]: "📁",
    }

    return (
        <div>
            <div className="text-xl text-gray-400">
                {objects.map((file, index) => (
                    <div key={index}>{fileThemes[file.type]} {file.name}</div>
                ))}
            </div>
        </div>
    );
};

export default Ls;
