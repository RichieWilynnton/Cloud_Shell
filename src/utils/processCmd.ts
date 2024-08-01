import CmdError from "@/components/cmd/cmdOutputs/CmdError";
import Ls from "@/components/cmd/cmdOutputs/Ls";
import Cd from "@/components/cmd/cmdOutputs/Cd";
import { CmdI } from "@/interfaces/CmdI";
import { CmdProps } from "@/interfaces/CmdPropsI";
import { SystemResponse } from "@/interfaces/SystemResponse";
import { getErrorMessage } from "./getErrorMessage";
import { AppStateI } from "@/interfaces/AppStateI";
import Mkdir from "@/components/cmd/cmdOutputs/Mkdir";
import Pwd from "@/components/cmd/cmdOutputs/Pwd";
import Rmdir from "@/components/cmd/cmdOutputs/Rmdir";
import Vi from "@/components/cmd/cmdOutputs/Vi";
import Snake from "@/components/cmd/cmdOutputs/Snake";
import { TreeNode } from "./TreeNode";

// Renders the execution of each command
const processCMD = (cmd: string, appContext : AppStateI): CmdI => {
    const cmdArr = cmd.split(" ");
    const cmdName = cmdArr[0];
    const args = cmdArr.slice(1);
    const fileSystemTree = appContext.fileSystemTree;
    const currentDirectory = fileSystemTree.getCurrentDirectory();
    const time = new Date();

    switch (cmdName) {
        case "ls": {
            let response: SystemResponse<TreeNode[]> = fileSystemTree.ls();

            // Check for arguments
            return {
                cmd: cmd,
                Component: Ls as React.ComponentType<CmdProps>,
                props: { args: args, objects: response.data },
                directory : currentDirectory,
                time: time,
            };
        }
        case "cd": {
            let response: SystemResponse<null> = fileSystemTree.cd(args);
            if (!response.success) {
                return {
                    cmd: cmd,
                    Component: CmdError as React.ComponentType<CmdProps>,
                    props: { args: args, message: `${getErrorMessage(response.error!, cmdName, args, currentDirectory)}` },
                    directory : currentDirectory,
                    time: time,
                };
            }
            return {
                cmd: cmd,
                Component: Cd as React.ComponentType<CmdProps>,
                props: { args: args },
                directory : currentDirectory,
                time: time,
            };
        }

        case "pwd": {
            let response: SystemResponse<string> = fileSystemTree.pwd();
            return {
                cmd: cmd,
                Component: Pwd as React.ComponentType<CmdProps>,
                props: { args: args, directory: currentDirectory},
                directory : currentDirectory,
                time: time,
            };
        }

        case "mkdir": {
            let response: SystemResponse<null> = fileSystemTree.mkdir(args);
            if (!response.success) {
                return {
                    cmd: cmd,
                    Component: CmdError as React.ComponentType<CmdProps>,
                    props: { args: args, message: `${getErrorMessage(response.error!, cmdName, args, currentDirectory)}` },
                    directory : currentDirectory,
                    time: time,
                };
            }
            return {
                cmd: cmd,
                Component: Mkdir as React.ComponentType<CmdProps>,
                props: { args: args },
                directory : currentDirectory,
                time: time,
            }
        }

        case "rmdir": {
            let response: SystemResponse<null> = fileSystemTree.rmdir(args);
            if (!response.success) {
                return {
                    cmd: cmd,
                    Component: CmdError as React.ComponentType<CmdProps>,
                    props: { args: args, message: `${getErrorMessage(response.error!, cmdName, args, currentDirectory)}` },
                    directory : currentDirectory,
                    time: time,
                };
            }
            return {
                cmd: cmd,
                Component: Rmdir as React.ComponentType<CmdProps>,
                props: { args: args },
                directory : currentDirectory,
                time: time,
            }
        }

        case "vi": {
            let response: SystemResponse<string> = fileSystemTree.vi(args);
            if (!response.success) {
                return {
                    cmd: cmd,
                    Component: CmdError as React.ComponentType<CmdProps>,
                    props: { args: args, message: `${getErrorMessage(response.error!, cmdName, args, currentDirectory)}` },
                    directory : currentDirectory,
                    time: time,
                };
            }
            return {
                cmd: cmd,
                Component: Vi as React.ComponentType<CmdProps>,
                props: { args: args, content : response.data},
                directory : currentDirectory,
                time: time,
            }
        }

        case "snake": {
            let response: SystemResponse<string> = fileSystemTree.snake(args);
            if (!response.success) {
                return {
                    cmd: cmd,
                    Component: CmdError as React.ComponentType<CmdProps>,
                    props: { args: args, message: `${getErrorMessage(response.error!, cmdName, args, currentDirectory)}` },
                    directory : currentDirectory,
                    time: time,
                };
            }
            return {
                cmd: cmd,
                Component: Snake as React.ComponentType<CmdProps>,
                props: { args: args, code : response.data},
                directory : currentDirectory,
                time: time,
            }
        }

        // case 'help':
        //     return {};

        default:
            return {
                cmd: cmd,
                Component: CmdError as React.ComponentType<CmdProps>,
                props: { args: args, message: `Command '${cmdName}' not found` },
                directory : currentDirectory,
                time: time,
            };
    }
};

export default processCMD;
