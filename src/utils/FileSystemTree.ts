import { SystemObject } from "@/enums/SystemObject";
import { TreeNode } from "./TreeNode";
import { SystemResponse } from "@/interfaces/SystemResponse";
import { ErrorType } from "@/enums/ErrorType";

// Tree for storing all directories and files. Includes functions to handle commands, but execution is not handled here because some issues regarding StrictMode with double renders
// Another issue was that cd was updating the current directory before the current directory was rendered in the UI, causing the cd user input to display the wrong directory
// Main point : State changes should be handled in the UI components, but the logic and error checking for the commands is in the respective command functions (ls, cd) (maybe including api calls)
export class FileSystemTree {
    root: TreeNode;
    currentDirectory : TreeNode;
    constructor() {
        // Set the parent of the root to itself
        const r : TreeNode = new TreeNode("", SystemObject.Directory, null , "/");
        this.root = r;
        this.root.parent = this.root;

        // Default directories
        this.root.addChild(new TreeNode("richie", SystemObject.Directory, this.root, "/richie/"));
        this.currentDirectory = this.root;
    }

    // For fetching user info from database
    init() : void {}

    // Get current directory
    getCurrentDirectory() : string {
        return this.currentDirectory.directory;
    }

    // Change current directory
    setCurrentDirectory(dirName : string) : void {
        if (dirName === "..") {
            this.currentDirectory = this.currentDirectory.parent!;
            return;
        }

        const dir = this.currentDirectory.children.find((child) => child.type === SystemObject.Directory && child.name === dirName);
        if (dir !== undefined) {
            this.currentDirectory = dir;
        }
    }

    // Get children of current directory
    getCurrentChildren() : TreeNode[] {
        return this.currentDirectory.children;
    }

    // Create new directory
    createNewDirectory(newDir: string) : void {
        this.currentDirectory.addChild(new TreeNode(newDir, SystemObject.Directory, this.currentDirectory, this.currentDirectory.directory + newDir + "/"));
    }

    // Remove directory
    removeDirectory(dirName: string) : void {
        this.currentDirectory.removeChild(dirName);
    }

    // Create new file
    createNewFile(newFile: string) : void {
        this.currentDirectory.addChild(new TreeNode(newFile, SystemObject.File, this.currentDirectory, this.currentDirectory.directory + newFile));
    }
    
    // edit existing file
    editFile(file: string, content: string) : void {
        const fileNode = this.currentDirectory.children.find((child) => child.type === SystemObject.File && child.name === file);
        if (fileNode !== undefined) {
            fileNode.content = content;
        }
        console.log(this.currentDirectory.children[1]);
    }   

    // Return all the children of the current directory
    ls() : SystemResponse<null> {
        return { success: true, data: null };
    }

    // Change the current directory (Only relative paths for now)
    cd(args : string[]) : SystemResponse<null> {
        // Error checking for invalid arguments
        if (args.length != 1) return { success: false, data: null, error: ErrorType.InvalidArgument };

        const dirName = args[0];
        if (dirName === "..") {
            // All directories will have a parent
            return { success: true, data: null };
        }

        // Find the directory
        const dirFound = this.currentDirectory.children.find((child) => child.type === SystemObject.Directory && child.name === dirName);
        if (dirFound === undefined)  {
            return { success: false, data: null, error: ErrorType.DirectoryNotFound };
        }
        
        
        return { success: true, data: null };
    }

    // Functions below tell whether command is valid or not

    // show the current directory
    pwd() : SystemResponse<null> {
        return { success: true, data: null };
    }
    // Make a new directory
    mkdir(args: string[]) : SystemResponse<null> {
        // Error checking for invalid arguments
        if (args.length != 1) return { success: false, data: null, error: ErrorType.InvalidArgument };

        const newDir = args[0];
        const dirFound = this.currentDirectory.children.find((child) => child.type === SystemObject.Directory && child.name === newDir);
        // Directory already exists
        if (dirFound !== undefined) {
            return { success: false, data: null, error: ErrorType.DirectoryAlreadyExists };
        }
        return { success: true, data: null };
    }

    // Remove a directory
    rmdir(args: string[]) : SystemResponse<null> {
        // Error checking for invalid arguments
        if (args.length != 1) return { success: false, data: null, error: ErrorType.InvalidArgument };

        const dirName = args[0];
        const dirFound = this.currentDirectory.children.find((child) => child.type === SystemObject.Directory && child.name === dirName);
        
        // Directory does not exist
        if (dirFound === undefined) {
            return { success: false, data: null, error: ErrorType.DirectoryNotFound };
        }

        return { success: true, data: null };
    }
    
    // edit file
    vi(args: string[]) : SystemResponse<string> {
        // can only make one file at a time
        if (args.length != 1) return { success: false, data: "", error: ErrorType.InvalidArgument };

        const file = args[0];
        const fileNode = this.currentDirectory.children.find((child) => child.type === SystemObject.File && child.name === file);
        var content = "";

        if (fileNode === undefined) {
            this.createNewFile(file);
        }
        else {
            console.log(fileNode)
            content = fileNode.content;
        }

        return { success: true, data: content };
    }
    

}