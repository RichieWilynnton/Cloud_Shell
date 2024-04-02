// Renders the execution of each command

import CmdTextDisplay from "@/components/cmd/CmdTextDisplay";
import CmdError from "@/components/cmd/cmdOutputs/CmdError";
import { CmdI } from "@/interfaces/CmdI";
import { CmdProps } from "@/interfaces/CmdPropsI";



const processCMD = (cmd: string) : CmdI => {
    const cmdArr = cmd.split(" ");
    const cmdName = cmdArr[0];
    const args = cmdArr.slice(1);

    // Maybe have a command checker function
    switch (cmdName) {
        // case "ls":
        //     return  { 
        //         cmd: 'ls', 
        //         Component: CmdTextDisplay as React.ComponentType<CmdProps>,
        //         props: { cmd: 'ls', args: args },
        //         time: new Date() 
        //     };
        // case 'cd':
        //     return {};
        // case 'clear':
        //     return {};
        // case 'help':
        //     return {};
        default:
            return {
                cmd: cmdName,
                Component: CmdError as React.ComponentType<CmdProps>,
                props : { cmd: cmdName, args: {"message" : `Command '${cmd}' not found`} },
                time: new Date(),
            };
    }
};

export default processCMD;
