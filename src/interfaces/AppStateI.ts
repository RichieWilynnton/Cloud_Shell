import { FileSystemTree } from "@/utils/FileSystemTree";

export interface AppStateI {
    fileSystemTree: FileSystemTree;
    currentDirectory: string;   // Seems redundant, but this is for handling context state change because of react's shallow comparison
    setCurrentDirectory: React.Dispatch<React.SetStateAction<string>>;
    
    // Add other global state or functions here
}