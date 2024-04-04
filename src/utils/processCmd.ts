import CmdTextDisplay from "@/components/cmd/CmdTextDisplay";
import CmdError from "@/components/cmd/cmdOutputs/CmdError";
import Ls from "@/components/cmd/cmdOutputs/Ls";
import Cd from "@/components/cmd/cmdOutputs/Cd";
import { CmdI } from "@/interfaces/CmdI";
import { CmdProps } from "@/interfaces/CmdPropsI";
import { SystemResponse } from "@/interfaces/SystemResponse";
import { getErrorMessage } from "./getErrorMessage";
import { AppStateI } from "@/interfaces/AppStateI";

// Renders the execution of each command
const processCMD = (cmd: string, appContext : AppStateI): CmdI => {
    const cmdArr = cmd.split(" ");
    const cmdName = cmdArr[0];
    const args = cmdArr.slice(1);
    const fileSystemTree = appContext.fileSystemTree;
    const currentDirectory = fileSystemTree.getCurrentDirectory();

    switch (cmdName) {
        case "ls": {
            let response: SystemResponse<null> = fileSystemTree.ls();

            // Check for arguments

            return {
                cmd: cmd,
                Component: Ls as React.ComponentType<CmdProps>,
                props: { args: args },
                directory : currentDirectory,
                time: new Date(),
            };
        }
        case "cd": {
            let response: SystemResponse<null> = fileSystemTree.cd(args);
            if (!response.success) {
                return {
                    cmd: cmd,
                    Component: CmdError as React.ComponentType<CmdProps>,
                    props: { args: args, message: `${getErrorMessage(response.error!, cmd, args)}` },
                    directory : currentDirectory,
                    time: new Date(),
                };
            }
            return {
                cmd: cmd,
                Component: Cd as React.ComponentType<CmdProps>,
                props: { args: args },
                directory : currentDirectory,
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
                props: { args: args, message: `Command '${cmd}' not found` },
                directory : currentDirectory,
                time: new Date(),
            };
    }
};

export default processCMD;
