// Renders the execution of each command

import CmdTextDisplay from "@/components/cmd/CmdTextDisplay";
import CmdError from "@/components/cmd/cmdOutputs/CmdError";
import Ls from "@/components/cmd/cmdOutputs/Ls";
import { useAppContext } from "@/components/cmd/context/AppContext";
import { CmdI } from "@/interfaces/CmdI";
import { CmdProps } from "@/interfaces/CmdPropsI";
import { SystemResponse } from "@/interfaces/SystemResponse";



const processCMD = (cmd: string) : CmdI => {
    const cmdArr = cmd.split(" ");
    const cmdName = cmdArr[0];
    const args = cmdArr.slice(1);
    const fileSystemTree = useAppContext().fileSystemTree;

    switch (cmdName) {
        case "ls":
            const response : SystemResponse<String[]> = fileSystemTree.ls();
            // if (!response.success) return handleError(response.error);

            const filesList : String[] = response.data;
            return  { 
                cmd: 'ls', 
                Component: Ls as React.ComponentType<CmdProps>,
                props: { cmd: cmdName, filesList: filesList},
                time: new Date() 
            };
        // case 'cd':
        //     return {};
        // case 'clear':
        //     return {};
        // case 'help':
        //     return {};
        // case 'mkdir':
        //     return {};
        // case 'rmdir':
        //     return {};
        // case 'touch':
        //     return {};
        
        default:
            return {
                cmd: cmdName,
                Component: CmdError as React.ComponentType<CmdProps>,
                props : { cmd: cmdName, message: `Command '${cmd}' not found` },
                time: new Date(),
            };
    }
};

export default processCMD;
