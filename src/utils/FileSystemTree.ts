import { SystemObject } from "@/enums/SystemObject";
import { TreeNode } from "./TreeNode";
import { SystemResponse } from "@/interfaces/SystemResponse";
import { ErrorType } from "@/enums/ErrorType";

// Tree for storing all directories and files. Includes functions to handle commands.
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

    // Return all the children of the current directory
    ls() : SystemResponse<String[]> {
        return { success: true, data: this.currentDirectory.children.map((child) => child.name) };
    }

    // Change the current directory (Only relative paths for now)
    cd(args : string[]) : SystemResponse<null> {
        // Error checking for invalid arguments
        if (args.length != 1) return { success: false, data: null, error: ErrorType.InvalidArgument };

        const dirName = args[0];
        if (dirName === "..") {
            // All directories will have a parent
            this.currentDirectory = this.currentDirectory.parent!;
            return { success: true, data: null };
        }

        // Find the directory
        console.log(dirName, this.currentDirectory.children);
        const dirFound = this.currentDirectory.children.find((child) => child.type === SystemObject.Directory && child.name === dirName);
        console.log(dirFound);
        if (dirFound === undefined)  {
            return { success: false, data: null, error: ErrorType.DirectoryNotFound };
        }
        
        // Change the current directory
        this.currentDirectory = dirFound;

        return { success: true, data: null };
    }

    // Make a new directory
    // mkdir() : SystemResponse<null> {}
    

}