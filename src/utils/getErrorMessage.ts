import { ErrorType } from "@/enums/ErrorType";

export const getErrorMessage = (error : ErrorType, cmd : string, args : string[], currentDirectory : string) : string => {
    switch (error) {
        case ErrorType.InvalidCommand:
            return `Error: Command '${cmd}' not found`;
        case ErrorType.InvalidArgument:
            return `Error: Invalid argument for command '${cmd}'`;
        case ErrorType.DirectoryNotFound:
            return `Error: Directory '${args[0]}' not found`;
        case ErrorType.DirectoryAlreadyExists:
            return `Error: Directory '${args[0]}' already exists`;
    }
}