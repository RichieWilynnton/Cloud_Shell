import CmdTextDisplay from "@/components/cmd/CmdTextDisplay";
import CmdError from "@/components/cmd/cmdOutputs/CmdError";
import Ls from "@/components/cmd/cmdOutputs/Ls";
import NoOutput from "@/components/cmd/cmdOutputs/NoOutput";
import { CmdI } from "@/interfaces/CmdI";
import { CmdProps } from "@/interfaces/CmdPropsI";
import { SystemResponse } from "@/interfaces/SystemResponse";
import { getErrorMessage } from "./getErrorMessage";
import { AppStateI } from "@/interfaces/AppStateI";

// Renders the execution of each command
// Might need to change structure, because I had to disable react strictmode.
const processCMD = (cmd: string, appContext : AppStateI): CmdI => {
    const cmdArr = cmd.split(" ");
    const cmdName = cmdArr[0];
    const args = cmdArr.slice(1);
    const fileSystemTree = appContext.fileSystemTree;

    switch (cmdName) {
        case "ls": {
            let response: SystemResponse<String[]> = fileSystemTree.ls();
            // Can't get errors for ls

            const filesList: String[] = response.data;
            return {
                cmd: cmd,
                Component: Ls as React.ComponentType<CmdProps>,
                props: { cmd: cmdName, filesList: filesList },
                time: new Date(),
            };
        }
        case "cd": {
            let response: SystemResponse<null> = fileSystemTree.cd(args);
            if (!response.success) {
                return {
                    cmd: cmd,
                    Component: CmdError as React.ComponentType<CmdProps>,
                    props: { cmd: cmdName, message: `${getErrorMessage(response.error!, cmd, args)}` },
                    time: new Date(),
                };
            }
            return {
                cmd: cmd,
                Component: NoOutput as React.ComponentType<CmdProps>,
                props: { cmd: cmdName },
                time: new Date(),
            };
        }
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
                cmd: cmd,
                Component: CmdError as React.ComponentType<CmdProps>,
                props: { cmd: cmdName, message: `Command '${cmd}' not found` },
                time: new Date(),
            };
    }
};

export default processCMD;
